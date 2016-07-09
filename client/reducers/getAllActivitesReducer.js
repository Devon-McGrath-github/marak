import data from './initialState'
import rsvpReducer from './rsvpReducer'
import * as actions from '../actions/rsvpActions'

const INITIAL_STATE = data.activities

const reducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case actions.RSVP_TOGGLE:
      return state.map((activity) => {
        if (activity.id === action.activityId) {
          let newArray = rsvpReducer(activity.attendeeIds, action)
          activity.attendeeIds = newArray
        }
        return activity
      })
    default:
      return state
  }

}

export default reducer
