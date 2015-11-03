import { REQUEST_PHOTOS, RECEIVE_PHOTOS, INVALIDATE_PHOTOS } from 'actions/const';
import { Map, List, fromJS } from 'immutable';

const initialState = Map({
  isFetching: false,
  didInvalidate: false,
  items: List([])
});

export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return state.merge({ isFetching: true, didInvalidate: false });
    case RECEIVE_PHOTOS:
      return state.merge({ isFetching: false, didInvalidate: false, items: fromJS(action.payload) });
    case INVALIDATE_PHOTOS:
      return state.merge({ isFetching: false, didInvalidate: true, items: List([]) });
    default:
      return state;
  }
}
