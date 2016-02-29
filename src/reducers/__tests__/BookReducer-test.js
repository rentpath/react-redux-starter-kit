import { expect } from 'utils'
import { REQUEST_BOOKS, RECEIVE_BOOKS, INVALIDATE_BOOKS, UNKNOWN } from 'actions/const'
import { Map, List } from 'immutable'
import bookReducer from '../BookReducer'

describe('BookReducer', () => {
  const initialState = Map({
    isFetching: false,
    didInvalidate: false,
    items: List([])
  })

  describe(REQUEST_BOOKS, () => {
    const action = { type: REQUEST_BOOKS }

    it('is fetching', () => {
      expect(bookReducer(initialState, action).get('isFetching')).to.equal(true)
    })

    it('did not invalidate', () => {
      expect(bookReducer(initialState, action).get('didInvalidate')).to.equal(false)
    })
  })

  describe(RECEIVE_BOOKS, () => {
    const action = { type: RECEIVE_BOOKS, payload: [{ title: 'Foo' }] }

    it('is not fetching', () => {
      expect(bookReducer(initialState, action).get('isFetching')).to.equal(false)
    })

    it('is not invalidated', () => {
      expect(bookReducer(initialState, action).get('didInvalidate')).to.equal(false)
    })

    it('includes immutable items', () => {
      const items = bookReducer(initialState, action).get('items')
      expect(items.size).to.equal(1)
      expect(items.first().get('title')).to.equal('Foo')
    })
  })

  describe(INVALIDATE_BOOKS, () => {
    const action = { type: INVALIDATE_BOOKS }

    it('did invalidate', () => {
      expect(bookReducer(initialState, action).get('didInvalidate')).to.equal(true)
    })

    it('is not fetching', () => {
      expect(bookReducer(initialState, action).get('isFetching')).to.equal(false)
    })
  })

  describe(UNKNOWN, () => {
    const action = { type: UNKNOWN }

    it('returns it unchanged', () => {
      expect(bookReducer(initialState, action)).to.equal(initialState)
    })
  })
})
