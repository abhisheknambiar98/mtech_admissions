const express= require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes/index');

const app = express();
const port=3000;

app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');
app.use('/',routes);

app.get('/',(req,res)=>{
    res.render('landing')
})

app.listen(port,(req,res)=>{
    console.log("Server listening at 3000!")
})