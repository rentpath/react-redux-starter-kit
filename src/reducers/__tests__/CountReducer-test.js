import { expect } from 'utils'
import { INCREMENT_COUNTER, DECREMENT_COUNTER, UNKNOWN } from 'actions/const'
import countReducer from '../CountReducer'

describe('CountReducer', () => {
  describe(INCREMENT_COUNTER, () => {
    it('adds the payload', () => {
      expect(countReducer(3, { type: INCREMENT_COUNTER, payload: 2 })).to.equal(5)
    })
  })

  describe(DECREMENT_COUNTER, () => {
    it('subtracts the payload', () => {
      expect(countReducer(3, { type: DECREMENT_COUNTER, payload: 2 })).to.equal(1)
    })
  })

  describe(UNKNOWN, () => {
    it('returns it unchanged', () => {
      expect(countReducer(3, { type: UNKNOWN, payload: 2 })).to.equal(3)
    })
  })
})
