import {TOGGLE_DELETE} from '../actions/toggleDeleteAction'
import R from 'ramda'


const reducer = (state = {} , action) => {
  switch (action.type) {
    case TOGGLE_DELETE:
      if (state !== action.id) {
        return state
      }
      return state
    default:
      return state
  }
}

export default reducer
