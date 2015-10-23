import { combineReducers} from 'redux';
import books from './BookReducer';
import count from './CountReducer';

export default combineReducers({
  books,
  count
});
