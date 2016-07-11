import R from 'ramda'

import rsvpReducer from './rsvpReducer'
import deleteActivityReducer from './deleteActivityReducer'
import { DELETE_ACTIVITY, deleteActivity } from '../actions/deleteActivityAction'
import { RSVP_TOGGLE, toggleRSVP } from '../actions/rsvpActions'
import { RECEIVE_ACTIVITIES } from '../actions/getAllActivitiesAction'


const reducer = (state = {} , action) => {
  switch (action.type) {
    case RSVP_TOGGLE:
      state = R.values(state)
      return state.map((activity) => {
        if (activity.activityId === action.activityId) {
          let newArray = rsvpReducer(R.values(activity.attendeeIds), action)
          activity.attendeeIds = newArray
        }
        return activity;

      })

    case RECEIVE_ACTIVITIES:
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
    default:
      return state;
  }
}

export default reducer
