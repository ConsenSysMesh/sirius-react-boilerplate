import React, { Component } from 'react'
import TopMenu from './containers/TopMenu'
import PageBody from './components/PageBody'
import { ConnectedRouter } from 'react-router-redux'
import './styles/test.css'

class App extends Component {
  render() {
    const { history } = this.props
    return (
      <div className='App'>
        <ConnectedRouter history={history}>
          <div>
            <TopMenu/>
            <PageBody/>
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

export default App
