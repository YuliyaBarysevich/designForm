import { useState, useEffect } from 'react';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleChange = (e) => {
    let { type, name } = e.target;

    const getValue = () => {
      if(type === 'checkbox'){
        return Array
        .from(document.querySelectorAll('input[name="'+name+'"]'))
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value)
      }
      if (type === 'file') {
        return e.target.files[0];
      }
      return e.target.value;
    }
    const value = getValue();
    setValues(prevValues => ({ ...prevValues, [name] : value }))
    console.log('All values', values)
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  return [handleSubmit, handleChange, values, errors];
};


export default useForm;