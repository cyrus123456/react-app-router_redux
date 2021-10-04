import { createStore, applyMiddleware } from 'redux'
import counterReducer from './countReducer'
import thunk from 'redux-thunk'
export default createStore(counterReducer, applyMiddleware(thunk))