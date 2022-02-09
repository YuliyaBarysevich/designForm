import React, { useEffect, useState, useRef } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import validate from "./validate";


const TraderPersonalInfo = (props) => {

  const [isDisabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState({})
  const inputPhone = useRef();

  const _continue = (e) => {
    e.preventDefault();
    props.nextStep();
  }

  const maskPhone = (e) => {
    props.onChange(e);
    const phoneValue = inputPhone.current.value
    .replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    inputPhone.current.value = !phoneValue[2] ? phoneValue[1] : `(${phoneValue[1]}) ${phoneValue[2]}${(`${phoneValue[3] ? `-${phoneValue[3]}` : ''}`)}`;
  };

  useEffect(() => {
    if(props.values){
      setErrors(validate(props.values));
    } 
  }, [props.values])

  useEffect(() => {
    let errorKeysStep1 = Object.keys(errors).filter(el => el !== 'tax-id')
    const containsInErrors = errorKeysStep1.map(el => !Object.keys(props.values).includes(el))
    const checkValidation = containsInErrors.filter(el => !el)
    if (checkValidation.length === 0 && containsInErrors.length === 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [errors])

  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name<span>*</span></Form.Label>
            <Form.Control 
              isValid={!errors.firstName}
              type="text" 
              size="lg" 
              name="firstName" 
              required 
              onChange={props.onChange} 
              value={props.values.firstName || ''}  />
          </Form.Group>
       </Col>
       <Col>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name<span>*</span></Form.Label>
            <Form.Control 
              type="text" 
              isValid={!errors.lastName}
              size="lg" 
              name="lastName" 
              required 
              onChange={props.onChange} 
              value={props.values.lastName || ''}  />
          </Form.Group>
       </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="businessName">
            <Form.Label>Company<span>*</span></Form.Label>
            <Form.Control 
              type="text" 
              isValid={!errors.businessName}
              size="lg" 
              name="businessName" 
              required 
              onChange={props.onChange} 
              value={props.values.businessName || ''}  />
          </Form.Group>
       </Col>
       <Col>
          <Form.Group className="mb-3" controlId="Title">
            <Form.Label>Title<span>*</span></Form.Label>
            <Form.Control 
              type="text" 
              isValid={!errors.title}
              size="lg" 
              name="title" 
              required 
              onChange={props.onChange} 
              value={props.values.title || ''} />
          </Form.Group>
       </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="Address1">
          <Form.Label>Business Address<span>*</span></Form.Label>
          <Form.Control 
            type="text" 
            isValid={!errors.address}
            size="lg" 
            name="address" 
            required 
            onChange={props.onChange} 
            value={props.values.address || ''} />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="Address2">
          <Form.Label>Apartment/Suite</Form.Label>
          <Form.Control 
            type="text" 
            size="lg" 
            name="address2" 
            onChange={props.onChange} 
            value={props.values.address2 || ''} />
        </Form.Group>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="City">
            <Form.Label>City<span>*</span></Form.Label>
            <Form.Control 
              type="text" 
              isValid={!errors.city}
              size="lg" 
              name="city" 
              required 
              onChange={props.onChange} 
              value={props.values.city || ''} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="State">
            <Form.Label>State<span>*</span></Form.Label>
            <Form.Control 
              type="text" 
              isValid={!errors.state}
              size="lg" 
              name="state" 
              required 
              onChange={props.onChange} 
              value={props.values.state || ''} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="Zip">
            <Form.Label>Zip Code<span>*</span></Form.Label>
            <Form.Control 
              type="number"
              isInvalid={errors.zip && errors.zip !== 'Required field'}
              isValid={!errors.zip} 
              size="lg" 
              name="zip" 
              required 
              onChange={props.onChange} 
              value={props.values.zip || ''} />
               <Form.Control.Feedback type="invalid">
                  {errors.zip}
               </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email<span>*</span></Form.Label>
            <Form.Control 
              type="text" 
              isInvalid={errors.email1 && errors.email1 !== 'Required field'}
              isValid={!errors.email1}
              size="lg" 
              name="email1" 
              required 
              onChange={props.onChange} 
              value={props.values.email1 || ''} />
              <Form.Control.Feedback type="invalid">
                  {errors.email1}
              </Form.Control.Feedback>
          </Form.Group>
          {errors.email && (
            <small><p className="help is-danger">{errors.email}</p></small>
          )}
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="Phone">
            <Form.Label>Phone Number<span>*</span></Form.Label>
            <Form.Control 
              type="text" 
              isInvalid={errors.phone1 && errors.phone1 !== 'Required field'}
              isValid={!errors.phone1}
              size="lg" 
              ref={inputPhone}
              name="phone1" 
              required 
              onChange={props.onChange} 
              value={props.values.phone1 || ''}
             />
             <Form.Control.Feedback type="invalid">
                  {errors.phone1}
             </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="Website">
            <Form.Label>Website<span>*</span></Form.Label>
            <Form.Control 
              isInvalid={errors.website && errors.website !== 'Required field'}
              isValid={!errors.website}
              type="text" 
              size="lg" 
              name="website" 
              required 
              onChange={props.onChange} 
              value={props.values.website || ''} />
              <Form.Control.Feedback type="invalid">
                  {errors.website}
             </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 8 }}>
        <Button
          type="button"
          name="next"
          disabled={isDisabled}
          onClick={_continue}
          variant="dark"
        >
          Next
        </Button>
        </Col>
      </Row>
    </>
  )
}

export default TraderPersonalInfo;