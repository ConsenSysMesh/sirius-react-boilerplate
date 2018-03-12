import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from "./reducers"
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import socketMiddleware from './middleware/socketMiddleware'

const configureStore = (history) => {
  // Redux DevTools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
        socketMiddleware,
      )
    )
  )

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
