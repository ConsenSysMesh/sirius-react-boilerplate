import { push } from 'react-router-redux'

export const actions = {
  LOGGING_IN: 'LOGGING_IN',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

export const login = (email, password) => async dispatch => {
  dispatch({
    type: actions.LOGGING_IN,
  })

  const res = await fetch('/users/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password}),
  })
  try {
    const {token, error} = await res.json()

    if (!error) {
      dispatch(push('/'))
      dispatch({
        type: actions.LOGIN,
        jwt: token,
      })
    } else {
      dispatch({
        type: actions.LOGOUT,
      })
    }
  } catch(e) {
    dispatch({
      type: actions.LOGOUT,
    })
  }
}

export const logout = dispatch => {
  dispatch(push('/login'))

  dispatch({
    type: actions.LOGOUT,
  })
}
