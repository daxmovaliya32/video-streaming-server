import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const [desc, setDesc] = useState([]);

  const hadleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    for (var i=0;i<videos.length;i++) {
      formdata.append(`videos${i}`, videos[i]);
    }
    console.log(formdata.getAll('videos1'));
    formdata.append("name", name); 
    formdata.append("desc", desc); 
    console.log(formdata);
    axios.post("/upload/videos",formdata)
      .then((success) => {
        console.log(success);
        alert(success);

      }) 
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">desc</label>
          <input
            type="text"
            name="desc"
            id="desc"
            className="form-control"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            className="form-control"
            onChange={(e)=>setVideos(e.target.files)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default VideoUpload;
