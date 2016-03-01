import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import books from './BookReducer'
import count from './CountReducer'

export default combineReducers({
  books,
  count,
  routing: routerReducer
})
