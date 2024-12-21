const express = require('express');
const cores = require ('cores');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const couchdb = require('cores')(process.env.COUCHDB_URL);

const app =express();

app.use(express.json());
app.use(cores({
    Credentials: true,
    origin:'http://localhost:5173/'
}));
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);
app.get('/test',(req,res) => {
    res.json('test ok');
});
app.post('/register',(req,res) =>{
    const {name,email,password}= req.body;
    res.json({name,email,password});
});
app.listen(4000);