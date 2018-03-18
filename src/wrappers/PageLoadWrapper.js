import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/user'

// this loads the JWT or anything related to login from localStorage - no UI related to this component
class PageLoadWrapper extends Component {
  // NOTE:: this component could recieve parameters that it checks against and acts accordingly for customisable behaviour
  checkUser() {
    const {
      dispatch,
      user: {
        status,
        jwt,
      },
    } = this.props

    if (jwt === undefined || jwt === '') {
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

export default connect(mapStateToProps)(PageLoadWrapper)
