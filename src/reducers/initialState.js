export const wsStatuses = {
  CONNECTING: 'CONNECTING',
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  DISCONNECTING: 'DISCONNECTING',
}

export const userStatus = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT',
  UNINITIALISED: 'UNINITIALISED',
}

export const initStateWs = {
  status: wsStatuses.DISCONNECTED,
}

export const initStateUser = {
  status: userStatus.UNINITIALISED,
}
