import React, {useRef, useState, useEffect} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import validate from "./validate";

const Documents = (props) => {

  const hiddenFileInput = useRef(null);
  const [isDisabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({})

  const _continue = (e) => {
    e.preventDefault();
    props.nextStep();
  }

  const _previous = (e) => {
    e.preventDefault();
    props.previousStep();
  }

  const _handleClick = event => {
    hiddenFileInput.current.click();
  };


  useEffect(() => {
    if(props.values){
      setErrors(validate(props.values, props.currentStep));
    } 
  }, [props.values])

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      console.log("if no errors", Object.values(errors))
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    console.log(Object.keys(errors))
  }, [errors])

  return (
    <>
    <Row>
      <Col xs={7}>
        <Form.Group controlId="tax-id">
          <Form.Label>Enter your Federal Tax ID or Business License Number<span>*</span></Form.Label>
          <Form.Control 
            type="text" 
            isValid={!errors["tax-id"]}
            isInvalid={errors["tax-id"] && errors["tax-id"] !== 'Required field'}
            size="lg" 
            name="tax-id" 
            required 
            onChange={props.onChange}
            value={props.values["tax-id"] || ''}
             />
        </Form.Group>
      </Col>
    </Row>
    <Row className="fileUpload-section">
      <Col xs={7}>
        <h3>Please upload one of the following documents for verification:</h3>

        <ul>
          <li>Business or Resale License - Signed resale certificates are required for each state where you seek tax exemption (U.S. only)</li>
          <li>Business card with your design profession</li>
          <li>Interior Design certification (e.g. NCIDQ, CCIDC)</li>
        </ul>
      </Col>
      <Col xs={{ span: 4, offset: 1 }} className="fileUpload-button-section">
        <Button size="lg" variant="light" onClick={_handleClick}>
          {props.values.taxDocumentNumberFile ? props.values.taxDocumentNumberFile.name : 'Choose File'}
        </Button>
        <small>Maximum file size 2.5MB (pdf, jpg or png file format)</small>
        <input type="file" style={{display:'none'}} ref={hiddenFileInput} name="taxDocumentNumberFile" onChange={props.onChange} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Select size="lg" name="designation" onChange={props.onChange} value={props.values.designation}>
          <option value="">What designation best describes your company?</option>
          <option value="interior-designer">Interior designer</option>
          <option value="architect">Architect</option>
          <option value="kitchen-designer">Certified kitchen designer</option>
          <option value="other">Other</option>
      </Form.Select>
      </Col>
    </Row>
    <Row className="button-group">
      <Col md={4}>
        <Button
          onClick={_previous}
          type="button"
          name="back"
          variant="outline-dark"
        >
          Back
        </Button>
      </Col>
      <Col md={{ span: 4, offset: 4 }}>
        <Button
          onClick={_continue}
          type="button"
          name="next"
          variant="dark"
          disabled={isDisabled}
        >
          Next
        </Button>
      </Col>
    </Row>
    </>

  )
};

export default Documents;