import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const SuccessMessage = (props) => {
  
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Modal.Title>Thank You for Registering!</Modal.Title>
          <p>
          One of our design concierges will be in touch within 2 business days to complete your account set up. Then you can start shopping, earning rewards, and passing along great savings to your clients!
          </p>
        </Modal.Body>
      </Modal> 
    </>
  )
}

export default SuccessMessage;