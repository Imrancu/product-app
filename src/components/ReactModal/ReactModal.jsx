import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = (props) => {
  const { title, image, price, description } = props.product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title.slice(0, 10)}</Modal.Title>
        </Modal.Header>
        <div className="">
          <img className="w-25" src={image} alt="" />
          <span className="ms-4 fw-bolder fs-1">Price: {price}</span>
        </div>
        <Modal.Body>{description}</Modal.Body>
      </Modal>
    </>
  );
};

export default ReactModal;
