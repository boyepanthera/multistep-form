import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import './output.css';
import styled from 'styled-components';

const Err = styled.div`
    color:red
    text-align : left
    `
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
  card : Yup.string()
  .min(16, 'Card has to be 16 characters')
  .max(16, 'Card number cannot be longer than 16 characters'),
  amount: Yup.string()
  .required('Amount is a required field')
})

const FormOne = props=> {
  const {touched, errors} =props
  if(props.currentForm === 1) {
    return (
      <>
      <div>
        <label htmlFor='name block'>Name</label>
        <Field  name='name' placeholder='Your username'/>
        <div>{ touched.name && errors.name ? (<Err>{errors.name}</Err>) : null}</div>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <Field  name='email' placeholder='johndoe@gmail.com'/>
        <div>{ touched.email  && errors.email ? (<Err>{errors.email}</Err>)  : null}</div>
      </div>
      </>
    )
  } else {
    return null
  }
}

const FormTwo = props=> {
  const {touched, errors} = props;
  if(props.currentForm===2) {
    return (
      <>
      <div>
        <label htmlFor='address'>Address</label>
        <Field  name='address' placeholder='Your address goes here'/>
        {touched.address && errors.address  ? (<Err>{errors.address}</Err> ) : null}
      </div>
      <div>     
        <label htmlFor='card'>Card</label>   
        <Field  name='card' placeholder='Card details'/>
        <div>{ touched.card && errors.card ? (<Err>{errors.card}</Err>) : null}</div>
      </div>
      </>
    )
  } else {
    return null
  }
}

const FormThree = props=> {
  if (props.currentForm === 3) {
    const {touched, errors}= props
    return (
      <>
      <label htmlFor='amount'>Amount</label>
      <Field  name='amount' placeholder='Amount you want to pay'/>
      {touched.amount && errors.amount ? (<Err>{errors.amount}</Err>) : null}
      <button type='submit' className='block p-2 rounded m-2 rounded bg-red-400'>Submit</button>
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
     setCurrentForm(currentForm=>currentForm+1)
  } 
}

  const handleBack = () => {
    if (currentForm && currentForm>1) {
      setCurrentForm(currentForm => currentForm-1) 
    }
  }

  const NextButton = ()=> (
    <div onClick={handleNext} className='bg-red-300 p-2 m-4  rounded w-15 h-10 text-white'>Next</div>
  )
  
  const BackButton = () => (
    <div onClick={handleBack} className='bg-red-300 p-2 m-4 rounded w-15 h-10 text-white'>Back</div>
  )

  return (
    <div>
     <Formik
     initialValues = {{
       name: '', email: '', address: '', card : '' , amount: ''
     }}
     onSubmit ={ values => console.log(values)}
     validationSchema = {FormSchema}
     >
        {
          (touched, errors) => (
            <>
            <Form className='w-1/2 mx-auto flex p-10 bg-gray-300'>
              <FormOne currentForm={currentForm} touched={touched} errors={errors} />
              <FormTwo   currentForm={currentForm} touched={touched}  errors={errors} />
              <FormThree currentForm={currentForm}  touched={touched}  errors={errors} />
              <BackButton/>
              <NextButton/>
            </Form>   
            </>
          )
        }

     </Formik>
    </div>
  )
}

export default App;