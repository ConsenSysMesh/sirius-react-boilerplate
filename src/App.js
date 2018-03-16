import React, { Component } from 'react'
import LoginForm from './containers/LoginForm'
import {
  Route,
  Link,
  Redirect,
  withRouter,
  NavLink
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
  userIsAuthenticated,
  userIsNotAuthenticated,
} from './wrappers/auth'

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
            <div>
              <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/protected">Protected</NavLink>
                <NavLink to="/login">Login</NavLink>
              </nav>
              <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/protected" component={ProtectedWrapped}/>
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

export default App
