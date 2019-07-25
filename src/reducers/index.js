import { combineReducers } from 'redux'
import {
  CONTACT_CREATED_FAILED,
  CONTACT_CREATED_SUCCESS
} from '../actions'

function contactsManage(state = {}, action) {
  switch (action.type) {
    case CONTACT_CREATED_SUCCESS:
    case CONTACT_CREATED_FAILED:
      return Object.assign({}, state, {
        contacts: action.data
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
    contactsManage,
})

export default rootReducer