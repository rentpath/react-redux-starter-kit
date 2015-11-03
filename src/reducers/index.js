import { combineReducers} from 'redux';
import books from './BookReducer';
import count from './CountReducer';
import photos from './PhotoReducer';

export default combineReducers({
  books,
  count,
  photos
});
