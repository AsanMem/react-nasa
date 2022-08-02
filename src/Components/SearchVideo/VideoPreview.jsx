
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import style from "./SearchVideo.module.css";

export default function VideoPreview({ videoPreview, videoPlay, title, description}) {
  const [show, setShow] = useState(false);
  const defaultVideo = "https://images-assets.nasa.gov/video/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon~orig.mp4"
  return (
    <div className={style.videoContainer}>
    <div className={style.galleryVideo}>       
          <img src={videoPreview} alt={'videoPreview'} className="Img_Grid" onClick={() => setShow(true)}/>
          <p className={style.title}>{(title.length < 20 ? title : title.slice(0,20) + '\n' + title.slice(20))}</p> 
    
    </div>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-110w"
        aria-labelledby="example-custom-modal-styling-title"
        className="Modal"
       >
            <ReactPlayer 
            url= {(videoPlay ? `${videoPlay.slice(0,-4)}~orig.mp4` : defaultVideo)}
            width='100%'
            height='100%'
            controls
            playing
            />
          <div className="containerModal">
          <h1 className="titleModal">{title}</h1>
          <p className="descriptionModal">{description}</p>
          </div>
      </Modal>
  </div>
  );
}

