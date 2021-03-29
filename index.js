const express = require('express');
const app = express();
var cors = require('cors');
const http = require('http').Server(app);
const server = require('./listen.js');
const bodyParser = require('body-parser');

const PORT=process.env.PORT

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/newBooking.js')(app);
        //require('./routes/newuserroute.js')(app, db);
        //require('./routes/deleteuserroute.js')(app, db, ObjectID);
        //require('./routes/getusersroute.js')(app, db);

    //GROUP ROUTES
        //require('./routes/newgrouproute.js')(app, db);
        //require('./routes/deletegrouproute.js')(app, db, ObjectID);
        //require('./routes/getgroupsroute.js')(app, db);
        //require('./routes/addusertogrouproute.js')(app, db);
        //require('./routes/deleteuserfromgrouproute.js')(app, db);
        //require('./routes/addnewadminroute.js')(app, db);
        //require('./routes/addnewassisroute.js')(app, db);
        //require('./routes/deladminroute.js')(app, db);
        //require('./routes/delassisroute.js')(app, db);

    //CHANNEL ROUTES
        //require('./routes/newchannelroute.js')(app, db);
        //require('./routes/deletechannelroute.js')(app, db, ObjectID);
        //require('./routes/addusertochannelroute.js')(app, db);
        //require('./routes/deluserfromchannelroute.js')(app, db);
        //require('./routes/getchannelsroute.js')(app, db);

    //CHAT ROUTES
        //require('./routes/addchatroute.js')(app, db);
        //require('./routes/getchatsroute.js')(app, db);

    //IMAGE ROUTES
        //require('./routes/imguploadroute.js')(app, formidable);

server.listen(http, PORT);