const Router = require('router');
const video = require('../schema/video');
const router = Router();
const videos = require('../schema/video');

router.get('/allvideos',async(req,res)=>{
 try {
    const video = await videos.find();
    res.status(200).send(video);
 } catch (error) {
    console.log(error);
 }
})

module.exports=router;