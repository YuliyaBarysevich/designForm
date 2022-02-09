import React, {useState, useEffect, useRef} from 'react';
import Intro from './Intro';
import TraderForm from './Form';
import useAxios from '../hooks/axios';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';

const Result = () => {
  const [list, setList] = useState([]);
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isLoading, setLoading] = useState(false);
  const formRef = useRef(null);

  const [addNewData] = useAxios(list)

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1)
  };

  const handleReset = () => {
    formRef.current.reset();
  }

  const _addData = async (data) => {
    addNewData(data, (response) => {
      if(!response.error){
        setList([...list, response])
        setShowSuccess(true)
        handleReset();
      } else {
        setShowError(false)
      }
    })
  }

  return (
    <>
      <Intro currentStep={currentStep} />
      <TraderForm isLoading={isLoading} currentStep={currentStep} formRef={formRef} handleSubmit={_addData} nextStep={nextStep} previousStep={previousStep} />
      <SuccessMessage show={showSuccess} onHide={() => setShowSuccess(false)} />
      <ErrorMessage show={showError} onHide={() => setShowError(false)}/>
    </>
  )
}

export default Result;