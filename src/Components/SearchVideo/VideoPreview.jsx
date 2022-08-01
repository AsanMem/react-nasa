
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
export default function VideoPreview({ videoPreview, videoPlay, title, description,vid}) {
  const [show, setShow] = useState(false);
  const proba = "https://images-assets.nasa.gov/video/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon~orig.mp4"

  return (
    <main className="grid">
    <div className="responsive" >  
    <div className="galleryVideo">       
          <img src={videoPreview} className="Img_Grid" onClick={() => setShow(true)}/>
          <div className="desc">{title}</div> 
    </div>
    </div>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-110w"
        aria-labelledby="example-custom-modal-styling-title"
        className="Modal"
       >
            <ReactPlayer 
            url= {`${videoPlay.slice(0,-4)}~orig.mp4`}
            width='100%'
            height='100%'
            controls
            playing
            />
          <div className="container-Modal">
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal">{description}</p>
          </div>
      </Modal>
  </main>
  );
}
