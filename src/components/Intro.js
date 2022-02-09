import React from 'react';
import { Container } from 'react-bootstrap';
import StepList from './Steps';

const Intro = (props) => {
  return (
   <Container className="intro">
     <h1>Design Pro+ Registration</h1>
     <p>Complete this short application to receive exclusive trade rewards, the best prices and stellar service - for you and your clients!</p>
     <StepList currentStep={props.currentStep} />
   </Container>
    
  )
};

export default Intro;