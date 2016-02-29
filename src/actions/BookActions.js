import { createAction } from 'redux-actions'
import { REQUEST_BOOKS, RECEIVE_BOOKS, INVALIDATE_BOOKS } from './const'

const requestBooks = createAction(REQUEST_BOOKS)
const receiveBooks = createAction(RECEIVE_BOOKS, items => items)
const invalidateBooks = createAction(INVALIDATE_BOOKS, error => error)

const fetchBooks = function(query) {
  return dispatch => {
    dispatch(requestBooks())
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => {
        if (response.status >= 400) {
          return Promise.reject(new Error('Bad response from server'))
        }
        return response.json()
      })
      .then(response => {
        dispatch(receiveBooks(response.items))
      }).catch(error => {
        dispatch(invalidateBooks(error))
      })
  }
}

export { fetchBooks, requestBooks, receiveBooks, invalidateBooks }
