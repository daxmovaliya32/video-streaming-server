const Router = require('router');
const router = Router();
const fs = require('fs');

const videofilemap={
    'vid1':'./videos/vid1.mp4', 
    'vid2':'./videos/vid2.mp4'
}

//its only for how streaming work and how video stream byte by byte using createReadStream
router.get('/videos/:videoid',(req,res)=>{
const filename = req.params.videoid;
const filepath= videofilemap[filename];
if(!filepath)
{
    return res.status(400).json({
        status:false,
        message:"file not found"
    })
}

const state =fs.statSync(filepath);
const filesize = state.size;
const range = req.headers.range; 

if(range)
{
    const parts = range.replace(/bytes=/,'').split('-')
    const start = parseInt(parts[0],10);
    const end = parts[1] ? parseInt(parts[1],10) : filesize-1
    const chunksize=end-start+1;
    const file = fs.createReadStream(filepath,{start,end});
    const head={
        'Content-Range':`bytes ${start}-${end}/${filesize}`,
        'Accept-Ranges':'bytes',
        'Content-Length':chunksize,
        'Content-Type':'video/mp4'
    }
    res.writeHead(206,head); 
    file.pipe(res);
}else{
    const head={
        'Content-Length':filesize-1,
        'Content-Type':'video/mp4'
    }
    res.writeHead(200,head);
    const file = fs.createReadStream(filepath).pipe(res)
}
})

module.exports=router;