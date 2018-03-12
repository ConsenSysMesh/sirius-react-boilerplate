import React, { Component } from 'react'
import { connect } from 'react-redux'
import { connectWebSockets } from '../actions/ws'

// this loads information that isn't tied to any component and initialises anything that needs initialisation (such as web sockets)
class SetupWrapper extends Component {
  initWebSockets() {
    const {
      dispatch,
      webSocketEndpoint,
    } = this.props
    console.log('this props', this.props)
    console.log(webSocketEndpoint)
    dispatch(connectWebSockets(webSocketEndpoint))
  }

  componentDidMount() {
    this.initWebSockets()
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export default connect()(SetupWrapper)
