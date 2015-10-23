import { INC } from 'actions';

export default function count(state = 5, action) {
  console.log('count', state, action);
  switch (action.type) {
    case INC:
      return state + action.by;
    default:
      return state;
  }
}
