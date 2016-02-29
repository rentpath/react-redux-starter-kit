import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'actions/const'

export default function countReducer(state = 5, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.payload
    case DECREMENT_COUNTER:
      return state - action.payload
    default:
      return state
  }
}
