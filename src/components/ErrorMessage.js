import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ErrorMessage = (props) => {
  
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
          <Modal.Title>Something has gone wrong</Modal.Title>
          <p>
           There was a problem submitting your form. Please check all information you provided and try again.
          </p>
        </Modal.Body>
      </Modal> 
    </>
  )
}

export default ErrorMessage;