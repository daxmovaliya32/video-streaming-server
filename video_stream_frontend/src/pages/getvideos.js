import React from 'react'
import GetVideo from '../components/getvideo'

const Getvideospage = () => {

  return (
    <div>
       <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
          <h1>all videos</h1>
            <div className="card-body">
              <GetVideo/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Getvideospage
