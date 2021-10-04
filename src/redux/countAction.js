import { ADD, REDUCE, ODDADD, ASYNCADD, } from './consttent'

export function addAcion(value) {
  return { type: ADD, data: value }
}
export function reduceAcion(value) {
  return { type: REDUCE, data: value }
}
export function oddAddAcion(value) {
  return { type: ODDADD, data: value }
}
export function syncAddAcion(value) {
  return { type: ASYNCADD, data: value }
}
export function asyncAddAcion(value, timeout) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(syncAddAcion(value))
    }, timeout);
  }
}