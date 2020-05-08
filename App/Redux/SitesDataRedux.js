import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const {Types, Creators} = createActions({
  persistData: ['data'],
  dataSaved: null
})
export const SitesTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  data: null,
  error: null,
})

export const postSave = (state, action) => {
  return state.merge({error: null, data: action.data})
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PERSIST_DATA]: postSave,
})
