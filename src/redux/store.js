import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducers from './reducers'
const middlewares = compose(applyMiddleware(thunk, logger))

export default createStore(rootReducers, middlewares)