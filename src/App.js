import React, { Component } from 'react'
import LoginForm from './containers/LoginForm'
import logo from './logo.svg'
import './App.css'
import {
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

class App extends Component {
  render() {
    const { history } = this.props
    return (
      <div className='App'>
        <ConnectedRouter history={history}>
          <div>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <h1 className='App-title'>Welcome to React</h1>
            </header>
            <p className='App-intro'>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <AuthButton />
            <ul>
              <li>
                <Link to='/public'>Public Page</Link>
              </li>
              <li>
                <Link to='/protected'>Protected Page</Link>
              </li>
            </ul>
            <Route path='/public' component={Public} />
            <Route path='/login' component={() => <LoginForm onSubmit={console.log}/>} />
            <PrivateRoute path='/protected' component={Protected} />
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

export default App




const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push('/'))
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>
