import React, { Component } from 'react'
import LoginForm from './containers/LoginForm'
import TopMenu from './containers/TopMenu'
import {
  Route,
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
} from './wrappers/auth'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Home = () => <h3>Home</h3>
const Protected = () => <h3>Protected</h3>

const Login = userIsNotAuthenticatedRedir(LoginForm)
const ProtectedWrapped = userIsAuthenticatedRedir(Protected)

class App extends Component {
  render() {
    const { history } = this.props
    return (
      <div className='App'>
        <ConnectedRouter history={history}>
          <div>
            <TopMenu/>
            <Container text style={{ marginTop: '7em' }}>
              <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/protected" component={ProtectedWrapped}/>
              </div>
            </Container>
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

export default App
