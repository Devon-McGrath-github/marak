import data from './initialState'
import {RECIEVE_ACTIVITIES} from '../actions/getAllActivitiesAction'

const INITIAL_STATE = data

const reducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case RECIEVE_ACTIVITIES:
      return action.activities
  }
  return state
}

export default reducer
