import React from 'react';
import {Field, Form, Formik} from 'formik';


const formOne = ()=> {
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

const formTwo = ()=> {
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
 

const formThree = props=> {
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
