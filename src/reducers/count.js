import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'actions';

export default function count(state = 5, action) {
  console.log('count', state, action);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.by;
    case DECREMENT_COUNTER:
      return state - action.by;
    default:
      return state;
  }
}
