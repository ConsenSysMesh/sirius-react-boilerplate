import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from "./reducers"
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import socketMiddleware from './middleware/socketMiddleware'
import throttle from 'lodash.throttle'
import { loadState, saveState } from './localStorage'

const configureStore = (history) => {
  // Redux DevTools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
        socketMiddleware,
      )
    )
  )

  // Save the state to localStorage any time it changes, using throttle to make
  // sure this doesn't happen too often, given the use of JSON.stringify()
  store.subscribe(throttle(() => {
    saveState(store.getState());
  }), 1000)

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

export default configureStore
