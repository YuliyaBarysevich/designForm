import React, {useState, useEffect} from 'react';
import { Row, Col, Form, ButtonGroup, ToggleButton, Button, ToggleButtonGroup, Spinner } from 'react-bootstrap';
import { budget, appliances, fixtures } from '../utils/appliences-check';
import SuccessMessage from './SuccessMessage';

const Quiz = (props) => {

  const Previous = (e) => {
    e.preventDefault();
    props.previousStep();
  }


  return (
    <>
      <Row className="quiz-intro">
        <h3>Customize Your Shopping Experience</h3>
        <p>Tell us more so we can automatically filter selections based on your style and brand preferences as well as budget.</p>
      </Row>
      <Row className="budget-section">
        <h3>What best describes clients' typical appliance budget?</h3>
        {budget.map((option, idx) => (
          <div key={idx} className="mb-3">
            <Form.Check 
              type='radio' 
              label={option.name} 
              value={option.value} 
              id={option.value}
              name="budget"
              onChange={props.onChange}
            />
           </div>
        ))}
      </Row>
      <Row className="appliances-section">
        <h3>What brands do you spec the most? Please click all that apply.</h3>
        <h4>Appliances</h4>
        <Row className="appliances-checkboxes">
          <ToggleButtonGroup required type="checkbox" className="mb-2 appliances" name="appliances">
            {appliances.map((item, idx) => (
              <ToggleButton 
                key={idx}
                value={item.value} 
                id={item.value}
                name={item.value}
                // checked={checkedState[idx]}
                onChange={props.onChange}
              >
                {item.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Row>
        <Row>
          <Form.Group controlId="other-appliances">
            <Form.Label>Other</Form.Label>
            <Form.Control as="textarea" rows={3} name="other-appliances" />
          </Form.Group>
        </Row>
      </Row>
      <Row className="fixtures-section">
        <h4>Fixtures</h4>
        <Row className="fixtures-checkboxes">
          <ToggleButtonGroup type="checkbox" required className="mb-2 fixtures" name="fixtures">
            {fixtures.map((item, idx) => (
              <ToggleButton
                key={idx}
                value={item.value}
                id={item.value}
                name={item.value}
                onChange={props.onChange}
              >
                {item.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Row>
        <Row>
          <Form.Group controlId="other-fixtures">
            <Form.Label>Other</Form.Label>
            <Form.Control as="textarea" rows={3} name="other-fixtures" />
          </Form.Group>
        </Row>
      </Row>
        <Row className="button-group">
      <Col md={4}>
        <Button
          onClick={Previous}
          type="button"
          name="back"
          variant="outline-dark"
        >
          Back
        </Button>
      </Col>
      <Col md={{ span: 4, offset: 4 }}>
        <Button
          type="submit"
          name="next"
          variant="dark"
          disabled={props.isLoading}>
            {props.isLoading ? 
            <Spinner 
            style={{paddingRight: "15px"}}
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            /> : null
            }
          Submit
        </Button>
      </Col>
    </Row>  
    </>
  )
}

export default Quiz;

