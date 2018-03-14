import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ws from './ws'


export default combineReducers({
  ws,
  routing: routerReducer,
})
