
import React, {useRef,useEffect} from 'react'

const VideoPlayer = ({videoId}) => {
    const videoRef = useRef(null);
    useEffect(()=>{
      if(videoRef.current)
      {
          videoRef.current.pause()
          videoRef.current.removeAttribute('src')
          videoRef.current.load()
      }
    },[])
  return (
    <video ref={videoRef} width='300' height='300' controls autoPlay>
        <source src={`http://localhost:8080/videos/${videoId}`} type='video/mp4'></source>
        your browser does not support the video tag
    </video>
  )
}

export default VideoPlayer
