const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cores = require('express');
const app = express();


app.use(cores());

app.get('/',(req,res)=>{
    res.send('hello world');
});

module.exports=app;