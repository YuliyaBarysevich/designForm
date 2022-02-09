import React, {useEffect, useState} from 'react';
import {Form, Container, Row, Col, Button } from 'react-bootstrap'
import useForm from '../hooks/form';
import validate from './validate';
import TraderPersonalInfo from './PersonalInfo';
import Documents from './Documents';
import Quiz from './Quiz';


const TraderForm = (props) => {

  const [ handleSubmit, handleChange, values, errors ] = useForm(submitForm, validate)

  function submitForm() {
    console.log('No errors');
  }

  return (
    <>
      <Form onSubmit={handleSubmit} ref={props.formRef} noValidate>
        <Container>
          {props.currentStep === 1 && 
            <TraderPersonalInfo 
              values={values}
              errors={errors}
              onChange={handleChange}
              nextStep={props.nextStep}
              currentStep={props.currentStep}
            />
          }
          {props.currentStep === 2 &&
            <Documents
              values={values} 
              onChange={handleChange}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              currentStep={props.currentStep}
            />
          }
          {props.currentStep === 3 &&
            <Quiz
              values={values} 
              onChange={handleChange}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              currentStep={props.currentStep}
              isLoading={props.isLoading}
            />
          }
        </Container>

      </Form>
    </>
  )

}

export default TraderForm;