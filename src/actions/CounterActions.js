import { createAction } from 'redux-actions';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './const';

const incrementCounter = createAction(INCREMENT_COUNTER, (payload = 1) => payload);
const decrementCounter = createAction(DECREMENT_COUNTER, (payload = 1) => payload);

export { incrementCounter, decrementCounter };
