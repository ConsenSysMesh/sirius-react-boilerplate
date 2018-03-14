export const wsStatuses = {
  CONNECTING: 'CONNECTING',
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  DISCONNECTING: 'DISCONNECTING',
}

export const initStateWs = {
  status: wsStatuses.DISCONNECTED,
}
