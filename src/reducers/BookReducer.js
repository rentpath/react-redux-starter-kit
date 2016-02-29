import { REQUEST_BOOKS, RECEIVE_BOOKS, INVALIDATE_BOOKS } from 'actions/const'
import { Map, List, fromJS } from 'immutable'

const initialState = Map({
  isFetching: false,
  didInvalidate: false,
  items: List([])
})

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      return state.merge({ isFetching: true, didInvalidate: false })
    case RECEIVE_BOOKS:
      return state.merge({ isFetching: false, didInvalidate: false, items: fromJS(action.payload) })
    case INVALIDATE_BOOKS:
      return state.merge({ isFetching: false, didInvalidate: true, items: List([]) })
    default:
      return state
  }
}
