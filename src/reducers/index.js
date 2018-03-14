import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ws from './ws'
import user from './user'


export default combineReducers({
  ws,
  user,
  routing: routerReducer,
})
