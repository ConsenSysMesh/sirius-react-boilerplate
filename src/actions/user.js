export const actions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

export const login = {
  type: actions.LOGIN,
}

export const logout = (push) => dispatch => {
  window.localStorage.jwt = undefined
  dispatch(push('/login'))
  dispatch({
    type: actions.LOGOUT,
  })
}
