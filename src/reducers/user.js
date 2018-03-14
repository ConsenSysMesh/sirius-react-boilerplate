import { actions } from '../actions/user'
import { initStateUser, userStatus } from './initialState'

export default function(state = initStateUser, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {...state, status: userStatus.LOGGED_IN}
    default:
      return state
  }
}
