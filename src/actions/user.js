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
  var data = new FormData();
  data.append( "email", JSON.stringify( {email, password} ) );
  const res = await fetch('/users/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password}),
  })
  const userInfo = await res.json()

  dispatch(push('/'))
  dispatch({
    type: actions.LOGIN,
    jwt: userInfo.token,
  })
}

export const logout = dispatch => {
  dispatch(push('/login'))

  dispatch({
    type: actions.LOGOUT,
  })
}
