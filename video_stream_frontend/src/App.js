import './App.css';
import VideoPlay from './pages/videplay';
import VideoUpload from './pages/videoupload';

function App() {
  return (
    <div className="App"> 
    <Routes>  
       <Route path="/videoplay" element={<VideoPlay/>} exact/>
       <Route path="/" element={<VideoUpload/>} />
    </Routes>
    </div>
  );
}

export default App;
