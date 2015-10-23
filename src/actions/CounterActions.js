import { createAction } from 'redux-actions';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const incrementCounter = createAction(INCREMENT_COUNTER, (payload = 1) => payload);
const decrementCounter = createAction(DECREMENT_COUNTER, (payload = 1) => payload);

export { incrementCounter, decrementCounter };
