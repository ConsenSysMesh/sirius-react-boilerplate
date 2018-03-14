import { actions } from '../actions/ws'
import { initStateWs } from './initialState'

export default function(state = initStateWs, action) {
  switch (action.type) {
    default:
      return state
  }
}
