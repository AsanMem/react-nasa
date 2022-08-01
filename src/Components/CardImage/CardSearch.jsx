import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import style from "./CardSearch.module.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function CardSearch({ nasaPicture, title, description }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <CardGroup className={style.contener}>
        <Card>
          <Card.Img
            className={style.img}
            variant="top"
            src={nasaPicture}
            onClick={() => setShow(true)}
          />
          <Card.Body className={style.bod}>
            <Card.Title className={style.title}>{title} </Card.Title>
            {/* <Card.Text>
          {description}
          </Card.Text> */}
          </Card.Body>
        </Card>
      </CardGroup>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-110w"
        aria-labelledby="example-custom-modal-styling-title"
        className="Modal"
      >
        <img src={nasaPicture} alt='thispicture'/>
        <div className="Modal">
          <h1>{title}</h1>
          <h6>{description}</h6>
        </div>
      </Modal>
    </>
  );
}


