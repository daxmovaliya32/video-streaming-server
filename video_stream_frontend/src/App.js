import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import VideoPlay from './pages/videplay';
import VideoUploads from './pages/videoupload';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
       <Route path="/videoupload" element={<VideoPlay/>} exact/>
      <Route path="/" element={<VideoUploads width={400} height={300}/>} />
       </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
