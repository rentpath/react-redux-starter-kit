import { createAction } from 'redux-actions';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './const';

const incrementCounter = createAction(INCREMENT_COUNTER, () => 1);
const decrementCounter = createAction(DECREMENT_COUNTER, () => 1);

export { incrementCounter, decrementCounter };
