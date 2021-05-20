const db = require('../models');
const bcrypt = require('bcrypt');
const User = db.User
const jwt = require('jsonwebtoken')


module.exports.create = (req, res) => {
    console.log(req.body);
      if (!req.body.firstName) return res.sendStatus(400);
   
  }

  module.exports.checkAuth = (req, res) => {
    const token = req.cookies.token
    if (token) {
        jwt.verify(token, process.env.SECRET_STRING, (err, user) => {
            if (err) {
                return res.send({authenticated: false});
            } else {
                res.send({authenticated: true, user})
            }
        });
    } else {
        return res.send({authenticated: false});
    }
}

  
  module.exports.find = (req, res) => {
      User.findAll({
          where: {
              userName: req.body.username,
          }
      })
      .then(data => {
          bcrypt.compare(req.body.password, data[0].password).then(function(result) {
              if (result == true) {
                  const token = jwt.sign({id: data[0].id, user: data[0].username}, process.env.SECRET_STRING, {expiresIn: '1h'});
                  res.cookie('token', token, {maxAge: 3600000, secure: true, httpOnly: true});
                  res.json({status:"success", user: data, token: token});
                  
              } else {
                  return res.status(401).json({
                      message: "Error, you have provided an incorrect username and/or password!"
                  })
              }
          });
      })
      .catch(err => {
          return res.status(500).json({
              message: err.message || "An error occurred whilst trying to query the database."
          });
      });
  }