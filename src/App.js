import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import './output.css';

const FormSchema = Yup.object().shape ({
  name : Yup.string()
  .min(2, 'Name cannot be lower than two characters')
  .max(30, 'Name is not allowed to be longer than 30 characters')
  .required('Name is a required field'),
  email : Yup.string()
  .email('This is not a valid mail format')
  .required('Email is a required field'),
  address: Yup.string()
  .min(10, 'Address has to be at least 10 characters'),
  card : Yup.number()
  .min(16, 'Card has to be 16 characters')
  .max(16, 'Card number cannot be longer than 16 characters'),
  amount: Yup.number()
  .required('Amount is a required field')
})


const FormOne = props=> {
  if(props.currentForm == 1) {
    return (
      <>
        <Field  name='name' placeholder='Your username'/>
        <Field  name='email' placeholder='johndoe@gmail.com'/>
      </>
    )
  } else {
    return null
  }
}

const FormTwo = props=> {
  if(props.currentForm==2) {
    return (
      <>
        <Field  name='address' placeholder='Your address goes here'/>
        <Field  name='card' placeholder='Card details'/>
      </>
    )
  } else {
    return null
  }
}

const FormThree = props=> {
  if (props.currentForm == 3) {
    return (
      <>
      <label htmlFor='amount'>Amount</label>
      <Field name='amount' placeholder='Amount you want to pay'/>
      <button type='submit p-2'>Submit</button>
      </>
    )
  } else {
    return null
  }
}


function App() {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNext = ()=> {
    if (currentForm && currentForm<3){
     setCurrentForm(currentForm+1)
  } 
}

  const handleBack = () => {
    if (currentForm && currentForm>1) {
      setCurrentForm(currentForm-1) 
    }
  }

  const nextButton = ()=> (
    <div>Next</div>
  )

  const backButton = () => (
    <div>Back</div>
  )

  return (
    <div>
     <Formik
     initialValues = {{
       name: '', email: '', address: '', card : '' , amount: ''
     }}

     validationSchema = {FormSchema}
     >
        {
          (touched, errors) => (
            <>
            <Form>
              <FormOne currentForm={currentForm} touched={touched} errors={errors} />
              <FormTwo   currentForm={currentForm} touched={touched}  errors={errors} />
              <FormThree currentForm={currentForm}  touched={touched}  errors={errors} />
            </Form>   
            <backButton onClick={handleBack}/>
            <nextButton onClick={handleNext}/>
            </>
          )
        }

     </Formik>
    </div>
  )
}

export default App;
