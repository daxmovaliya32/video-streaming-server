import './App.css';
import { useState } from 'react';
import VideoPlayer from './components/videoplayer';

function App() {
  const [videoId,setVideoId]=useState(null);
  function plyvideo(e,videoId)
  {
    e.preventDefault()
    setVideoId(videoId)
  }
  return (
    <div className="App">
     {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>}<br />
     <button onClick={(e)=>{plyvideo(e,'vid1')}}>plyvideo1</button>
     <button onClick={(e)=>{plyvideo(e,'vid2')}}>plyvideo2</button>
    </div>
  );
}

export default App;
