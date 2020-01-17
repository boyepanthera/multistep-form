import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape ({
  name : Yup.string()
  .min(2, 'Name cannot be lower than two characters')
  .max(30, 'Name is not allowed to be longer than 30 characters'),
  email : Yup.string()
  .email('This is not a valid mail format')
  .required('Email is a required field')
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
      <Field name='amount' placeholder='Amount you want to pay'/>
      <button type='submit'>Submit</button>
      </>
    )
  } else {
    return null
  }
}


function App() {
  return (
    <div>
     <Formik
     initialValues = {{
       name: '', email: '', address: '', card : '' , amount: '', currentForm: 1
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
            <backButton/>
            <nextButton/>
            </>
          )
        }

     </Formik>
    </div>
  );
}

export default App;
