import rsvpReducer from './rsvpReducer'
import deleteActivityReducer from './deleteActivityReducer'
import {DELETE_ACTIVITY} from '../actions/deleteActivityAction'
import {TOGGLE_DELETE} from '../actions/toggleDeleteAction'
import * as actions from '../actions/rsvpActions'
import {RECIEVE_ACTIVITIES} from '../actions/getAllActivitiesAction'
import R from 'ramda'


const reducer = (state = {} , action) => {
  switch (action.type) {
    case actions.RSVP_TOGGLE:
      state = R.values(state)
      return state.map((activity) => {
        if (activity.activityId === action.activityId) {
          let newArray = rsvpReducer(R.values(activity.attendeeIds), action)
          activity.attendeeIds = newArray
        }
        return activity;

      })

    case RECIEVE_ACTIVITIES:
      return action.activities;

    case DELETE_ACTIVITY:
      state = R.values(state)
      return state.filter((activity) => {
        if (activity.activityId === action.activityId) {
          if (action.currentUserId === action.activityCreatorId) {
            deleteActivityReducer(activity, action)
            return false
          }
        }
        return true

      })

    case TOGGLE_DELETE:
      return state
    default:
      return state;
  }
}

export default reducer
