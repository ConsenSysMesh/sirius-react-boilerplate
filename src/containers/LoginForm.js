import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../actions/user'
import SemanticReduxFormField from '../components/SemanticReduxFormField'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div className='login-form'>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
              <Field
                component={SemanticReduxFormField}
                as={Form.Input}
                name='email'
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                type='email' />
              <Field
                component={SemanticReduxFormField}
                as={Form.Input}
                name='password'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password' />
              <Button color='teal' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            Not registered? <a href='#unimplemented'>Register</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onSubmit: ({email, password}) => dispatch(login(email, password))
})
export default connect(() => ({}), mapDispatchToProps)(reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginForm))
