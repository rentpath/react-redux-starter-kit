import { REQUEST_BOOKS, RECEIVE_BOOKS, INVALIDATE_BOOKS } from 'actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, { isFetching: true, didInvalidate: false });
    case RECEIVE_BOOKS:
      return Object.assign({}, state, { isFetching: false, didInvalidate: false, items: action.payload });
    case INVALIDATE_BOOKS:
      return Object.assign({}, state, { isFetching: false, didInvalidate: true, items: []});
    default:
      return state;
  }
}
