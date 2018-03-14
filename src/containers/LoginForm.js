import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name='email'
            component='input'
            type='email'
            placeholder='Email'
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name='password'
            component='input'
            type='password'
            placeholder='Password'
          />
        </div>
      </div>
      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginForm)
