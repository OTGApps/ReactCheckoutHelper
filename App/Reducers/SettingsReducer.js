import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import createReducer from './CreateReducer'

export const INITIAL_STATE = Immutable({
  taxEnabled: true,
  taxRate: '6.75',
  shippingEnabled: true,
  shippingRate: '4.00'
})

const save = (state, action) => {
  return { ...state, ...action}
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SAVE_SETTINGS]: save
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
