//import { createAction } from 'redux-actions';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function incrementCounter(by = 1) {
  return { type: INCREMENT_COUNTER, by };
}

export function decrementCounter(by = 1) {
  return { type: DECREMENT_COUNTER, by };
}
