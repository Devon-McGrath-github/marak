import {RECIEVE_ACTIVITIES} from '../actions/getAllActivitiesAction'

const reducer = (state = {} , action) => {
  switch (action.type) {
    case RECIEVE_ACTIVITIES:
      return action.activities
  }
  return state
}

export default reducer
