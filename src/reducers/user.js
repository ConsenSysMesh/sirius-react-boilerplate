import { actions } from '../actions/user'
import { initStateUser, userStatus } from './initialState'

export default function(state = initStateUser, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        status: userStatus.LOGGED_IN,
        jwt: action.jwt,
      }
    case actions.LOGOUT:
      return {
        ...state,
        status: userStatus.LOGGED_OUT,
        jwt: '',
      }
    case actions.LOGGING_IN:
      return {...state, status: userStatus.LOGGING_IN}
    default:
      return state
  }
}
