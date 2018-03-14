import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/user'
import { userStatus } from '../reducers/initialState'
import LoginForm from '../containers/LoginForm'
import { push } from 'react-router-redux'

// this loads the jwt or anything related to login from localStorage - no UI related to this component
class AuthWrapper extends Component {
  checkUser() {
    const {
      dispatch,
      user: {
        status
      },
    } = this.props

    if (!window.localStorage.jwt) {
      dispatch(logout(push))
    } else {
      console.log('TODO:: check if the jwt is valid and update state with result')
    }
  }

  componentDidMount() {
    this.checkUser()
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(AuthWrapper)
