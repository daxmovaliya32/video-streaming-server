const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    video:{
        type:[{type:String}]
    },
    url:{
        type:String
    }

},
{
    timestamps:true
})

module.exports = videos = mongoose.model('videos',videosSchema);