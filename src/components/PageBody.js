import React from 'react'
import LoginForm from '../containers/LoginForm'
import {
  Route,
} from 'react-router-dom'
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
} from '../wrappers/auth'
import { Container } from 'semantic-ui-react'

const Home = () => <h3>Home</h3>
const Protected = () => <h3>Protected</h3>

const Login = userIsNotAuthenticatedRedir(LoginForm)
const ProtectedWrapped = userIsAuthenticatedRedir(Protected)

const PageBody = () => (
  <Container text style={{ marginTop: '7em' }}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/protected" component={ProtectedWrapped}/>
    </div>
  </Container>
)

export default PageBody
