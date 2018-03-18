export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    const isLocalStorageSet = localStorage.getItem('isLocalStorageSet')
    if (serializedState === null) {
      return undefined
    }
    return {persistedState: JSON.parse(serializedState), isLocalStorageSet: (isLocalStorageSet === 'true')}
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // Ignore write errors for now
  }
}
