import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import createReducer from './CreateReducer'

export const INITIAL_STATE = Immutable({
  taxEnabled: true,
  taxPreDiscountedPrice: false,
  taxRate: '6.75',
  shippingTaxEnabled: false,
  shippingEnabled: true,
  shippingRate: '4.00',
  shippingRatePct: null,
  shippingMaximum: null,
  shippingMinimum: null
})

const save = (state, action) =>
  state.merge(action)

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SAVE_SETTINGS]: save
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
