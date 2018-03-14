import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/user'

// this loads the jwt or anything related to login from localstorage - no UI related to this component
class AuthWrapper extends Component {
  initWebSockets() {
    const {
      dispatch,
      user,
    } = this.props
    console.log(user)
  }

  componentDidMount() {
    this.props.dispatch(login)
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

const mapStateToProps = ({user}) => ({user})

export default connect()(AuthWrapper)
