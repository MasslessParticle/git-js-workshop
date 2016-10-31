import {combineReducers} from 'redux'
import franc from 'franc'

import {TYPE_TEXT} from '../actions/actions'

function someSpecializedReducer(state = [], action) {
  switch (action.type) {
    case TYPE_TEXT:
      return franc.all(action.inputText)
    default:
      return state
  }
}

// Put all your specialized reducers in here
const rootReducer = combineReducers({
  someSpecializedReducer
})

export default rootReducer