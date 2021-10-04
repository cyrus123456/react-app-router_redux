import { ADD, REDUCE, ODDADD, ASYNCADD, } from './consttent'
const defaultCount = 0
export default function counterReducer(preState = defaultCount, acton) {
  const { type, data } = acton
  switch (type) {
    case ADD:
      return preState + parseInt(data)
    case REDUCE:
      return preState - parseInt(data)
    case ODDADD:
      return preState + parseInt(data)
    case ASYNCADD:
      return preState + parseInt(data)
    default:
      return defaultCount
  }
}