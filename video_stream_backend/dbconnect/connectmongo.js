const mongoose = require('mongoose');
require('dotenv').config()

const mongodb = async () => {
    try {
        mongoose.connect(process.env.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(console.log("connection successfully"))
    }catch (error) {
        console.log(error);
    }
};
module.exports={mongodb};