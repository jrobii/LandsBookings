const db = require('../models');
const User = db.User

module.exports.create = (req, res) => {
    console.log(req.body);
      if (!req.body.firstName) return res.sendStatus(400);
   
  }
  
  module.exports.find = (req, res) => {
      User.findAll({
          where: {
              userName: req.body.username,
              password: req.body.password
          }
      })
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          return res.status(500).json({
              message: err.message || "An error occurred whilst trying to query the database."
          });
      });
  }