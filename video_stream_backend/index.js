const express = require('express');
const cors = require('cors');
const { mongodb } = require('./dbconnect/connectmongo');
require('dotenv').config()
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(cors());
mongodb();

 
const videoplay = require("./routes/videoplayer")
app.use(videoplay);
const videoupload = require("./routes/uploadvideo");    
app.use(videoupload);

app.listen(process.env.PORT,()=>{
    console.log(`server running on port number ${process.env.PORT}`);
})