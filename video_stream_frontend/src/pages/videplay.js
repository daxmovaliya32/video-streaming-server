import React from 'react'
import VideoPlayer from '../components/videoplayer';
import { useState } from 'react';

const VideoPlay = () => {
    const [videoId,setVideoId]=useState(null);
    function plyvideo(e,videoId)
    {
      e.preventDefault()
      setVideoId(videoId)
    }
  return (
    <div>
    {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>}<br />
    <button onClick={(e)=>{plyvideo(e,'vid1')}}>plyvideo1</button>
    <button onClick={(e)=>{plyvideo(e,'vid2')}}>plyvideo2</button>
   </div>
  )
}

export default VideoPlay
