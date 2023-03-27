import React from 'react'
import VideoUpload from '../components/videoupload'

const VideoUploads = (props) => {
  return (
    <div className='raw'>
    <div className='col-md-6'>
    <div className='card'
    style={{
      height:"auto",
      width:"800px",
      margin:"40px",
      border:"1px solid black"
    }}>
    <h1>Video upload</h1>
    <div className='card-body'><VideoUpload/></div>
    </div>
    </div>
  </div>
  )
}

export default VideoUploads
