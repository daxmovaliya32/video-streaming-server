import axios from "axios";
import React, { useEffect, useState } from "react";

const GetVideo = () => {
    const [medias, setMedias] = useState([]);
    console.log(medias);
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
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {medias &&
              medias.map((media) => {
                return (
                  <tr>
                    <td>{media.name}</td>
                    <td>
                      {media.videos.map((video) => {
                        return (
                          <video
                            preload="auto"
                            width="320"
                            height="240"
                            controls
                          >
                            <source src={ getAllMedias={getAllMedias} } />
                            ;Your browser does not support the video tag.
                          </video>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetVideo;