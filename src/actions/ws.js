export const actions = {
  ON_CONNECT_WS: 'ON_CONNECT_WS',
  CONNECTING_WS: 'CONNECTING_WS',
  ON_DISCONNECT_WS: 'ON_DISCONNECT_WS',

  RECIEVE_WS_MESSAGE: 'RECIEVE_WS_MESSAGE',
  CONNECT_WS: 'CONNECT_WS',
  DISCONNECT_WS: 'DISCONNECT_WS',
  SEND_WS_MESSAGE: 'SEND_WS_MESSAGE',
}


export const connected = {
  type: actions.ON_CONNECT_WS,
}

export const connecting = {
  type: actions.CONNECTING_WS,
}

export const disconnected = {
  type: actions.ON_DISCONNECT_WS,
}

export const connectWebSockets = url => ({
  type: actions.CONNECT_WS,
  url,
})
