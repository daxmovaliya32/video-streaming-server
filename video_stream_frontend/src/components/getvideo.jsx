import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetVideo = () => {
    var [medias, setMedias] = useState([]);
   useEffect(() => {
     getAllMedias();
   }, []);
 
   const getAllMedias = () => {
     axios.get("allvideos")
       .then((result) => {
         setMedias(result.data);
       })
       .catch((error) => {
         setMedias([]);
         console.log(error);
         alert("Error happened!");
       });
   };
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Description</th><br/>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>         
            {medias &&                  
              medias.map(media => {   
                return (   
                  <tr>                       
                    <td>{media.name}</td> 
                    <td>{media.desc}</td><br/>
                    <td>                               
                      {media.video.map(video => {  
                        return(
                          <div> 
                          <video                                                     
                            controls 
                            width="200" 
                            preload="none" 
                            poster={`${video}`}>
                            <source src={getAllMedias}></source>         
                            your browser does not support the video tag
                          </video>
                          </div>
                        )
                      })}
                      <li><Link to={media.url}>{media.name}</Link></li>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetVideo;