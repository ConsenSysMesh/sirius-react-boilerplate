import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { logout } from '../actions/user'
import {
  NavLink
} from 'react-router-dom'
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from '../wrappers/auth'
import { Container, Menu, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


// {userIsNotAuthenticated(<Button inverted={true} onClick={() => this.props.dispatch(push('/login'))}>Log in</Button>)}
class TopMenu extends Component {
  render() {
    const LoginButton = userIsNotAuthenticated(() => <Button inverted={true} onClick={this.props.login}>Log in</Button>)
    const LogoutButton = userIsAuthenticated(() => <Button inverted={true} onClick={this.props.logout} style={{ marginLeft: '0.5em' }}>Log out</Button>)
    const SignUpButton = userIsNotAuthenticated(() => <Button as='a' inverted={true} primary={false} style={{ marginLeft: '0.5em' }}>Sign Up</Button>)
    const { pathname } = this.props

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            Project Name
          </Menu.Item>
          <Menu.Item active={'/' === pathname}><NavLink exact to='/'>Home</NavLink></Menu.Item>
          <Menu.Item active={'/protected' === pathname}><NavLink exact to='/protected'>Protected</NavLink></Menu.Item>
          <Menu.Item position='right'>
            <LoginButton/>
            <LogoutButton/>
            <SignUpButton/>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout),
  login: () => dispatch(push('/login')),
})
const mapStateToProps = ({routing: {location: {pathname}}}) => ({
  pathname
})
export default connect(mapStateToProps, mapDispatchToProps)(TopMenu)
