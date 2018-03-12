import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import test from './test'


export default combineReducers({
  test,
  routing: routerReducer
})
