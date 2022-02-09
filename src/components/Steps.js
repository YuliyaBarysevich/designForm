import React from 'react';
import { Row } from 'react-bootstrap';

const StepList = (props) => {

  return (
    <Row>
      <ul className="steps">
        <li className="step-round" name={props.currentStep === 1 ? 'active' : 'not-active'}>1</li>
        <li className="divider"></li>
        <li className="step-round" name={props.currentStep === 2 ? 'active' : 'not-active'}>2</li>
        <li className="divider"></li>
        <li className="step-round" name={props.currentStep === 3 ? 'active' : 'not-active'}>3</li>
      </ul>
    </Row>
  )
}

export default StepList;