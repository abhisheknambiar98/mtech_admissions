const express= require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport =require('passport');
const sequelize=require('sequelize');


const app = express();
const port=3000;

// const basic = require('./routes/index');
// const app_routes=require('./routes/applicant/applicant');
// const admin_routes=require('./routes/admin/admin');

require('./config/passport.js')(passport);

app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');

//establishing routes
app.use('/', require('./routes/index'));
// app.use('/',app_routes);
// app.use('/',admin_routes);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




const db = require('./models');
db.sequelize.sync().then(function(){
  console.log('Database synced!!');
  app.listen(port,(req,res)=>{
    console.log("Server listening at 3000!")
})
})
.catch((err) =>{
  console.log(err);
})

