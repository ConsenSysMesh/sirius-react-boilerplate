import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/user'
import { userStatus } from '../reducers/initialState'
import LoginForm from '../containers/LoginForm'

// this loads the JWT or anything related to login from localStorage - no UI related to this component
class AuthWrapper extends Component {
  // NOTE:: this component could recieve parameters that it checks against and acts accordingly for customisable behaviour
  checkUser() {
    const {
      dispatch,
      user: {
        status
      },
    } = this.props

    const localJWT = window.localStorage.getItem('jwt')
    if (localJWT === null || localJWT === 'null') {
      dispatch(logout)
    } else {
      console.log('TODO:: check if the JWT is valid and update state with result')
    }
  }

  componentDidMount() {
    this.checkUser()
  }

  render() {
    // NOTE:: this component could take in other options to dictate its behaviour, eg. what the behavious should be if the user isn't logged in to see the page
    return React.Children.only(this.props.children)
  }
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(AuthWrapper)
