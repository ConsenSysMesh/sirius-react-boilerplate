import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../actions/user'

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
      </div>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  onSubmit: ({email, password}) => dispatch(login(email, password))
})
export default connect(() => ({}), mapDispatchToProps)(reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginForm))
