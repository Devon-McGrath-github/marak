import {RECIEVE_USERINFO} from '../actions/getUserInfoAction'
import R from 'ramda'


const reducer = (state = {} , action) => {
  switch (action.type) {
    case RECIEVE_USERINFO:
      return action.currentUser;
    default:
      return state;
  }
}

export default reducer
