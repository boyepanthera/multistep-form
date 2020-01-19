import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import './output.css';

const FormOne = props=> {
  if(props.currentForm === 1) {
    return (
      <>
      <div className='mb-4'>
        <label htmlFor='name block' className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
        <Field  name='name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Your username'/>
      </div>
      <div>
        <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
        <Field  name='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  placeholder='johndoe@gmail.com'/>
      </div>
      </>
    )
  } else {
    return null
  }
}

const FormTwo = props=> {
  if(props.currentForm===2) {
    return (
      <>
      <div>
        <label htmlFor='address'>Address</label>
        <Field  name='address'  placeholder='Your address goes here'/>
      </div>
      <div>     
        <label htmlFor='card'>Card</label>   
        <Field  name='card' placeholder='Card details'/>
      </div>
      </>
    )
  } else {
    return null
  }
}

const FormThree = props=> {
  if (props.currentForm === 3) {
    return (
      <>
      <label htmlFor='amount'>Amount</label>
      <Field  name='amount'  placeholder='Amount you want to pay'/>
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
     >
        {
          (touched, errors, values) => (
            <div className='w-full max-w-sm'>
            <Form className='bg-white shadown-md rounded px-8 pt-6 pb-8 mb-4'>
              <FormOne currentForm={currentForm} />
              <FormTwo   currentForm={currentForm}  />
              <FormThree currentForm={currentForm}   />
              <BackButton/>
              <NextButton/>
            </Form>   
            </div>
          )
        }

     </Formik>
    </div>
  )
}

export default App;