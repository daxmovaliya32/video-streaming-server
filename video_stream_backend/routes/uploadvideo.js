const Router = require('router');
const uplodvideo = require("../schema/video")
require('dotenv').config();
const router = Router();
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const formmidable = require('formidable');

cloudinary.config({
    cloud_name: "daxmovaliya",
    api_key: process.env.api_key,
    api_secret:process.env.api_secret,
    secure:true
  });

router.post('/upload/videos',async(req,res)=>{
 try { 
   var formData = new formmidable.IncomingForm();
   formData.maxFileSize = 1000*1024*1024;
  //  console.log(formData);
   formData.parse(req,function(error,fields,files)
   {
    if(error)
    {
      console.log(error);
    }
     console.log(files);
    cloudinary.uploader.upload_large(files.videos0.filepath,{public_id:files.videos0.originalFilename},
      function(err,result) 
      {
        if(err)
        {
          console.log(err);
        }
        const filedata = new uplodvideo({
          name:fields.name,
          desc:fields.desc,
          video:files.videos0,
          url:result.secure_url
         })
         res.send(filedata.save());
      }
      , 
      { resource_type: "video" });
   })
  } catch (error) {
    console.log(error);
  } 
})

module.exports=router;