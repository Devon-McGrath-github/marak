import data from './initialState'
import {RECIEVE_ACTIVITIES} from '../actions/getAllActivitiesAction'

const INITIAL_STATE = data

const reducer = (state = INITIAL_STATE , action) => {
  console.log("get all activities state", state);
  switch (action.type) {
    case RECIEVE_ACTIVITIES:
      return action.activities
  }
  return state
}

export default reducer
