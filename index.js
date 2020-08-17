const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.urlMongodb,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

const app = express();

const project = require('./router/project.js');

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/',project);

var port = 212;

app.listen(port,()=>{
	console.log(`The server has been started at th port: ${port} or http://localhost:${port}`);
});