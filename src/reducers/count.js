import { INC, DEC } from 'actions';

export default function count(state = 5, action) {
  console.log('count', state, action);
  switch (action.type) {
    case INC:
      return state + action.by;
    case DEC:
      return state - action.by;
    default:
      return state;
  }
}
