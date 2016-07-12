import R from 'ramda'

import rsvpReducer from './rsvpReducer'
import { DELETE_ACTIVITY } from '../actions/deleteActivityAction'
import { RSVP_TOGGLE, CANCEL_RSVP, toggleRSVP } from '../actions/rsvpActions'
import { RECEIVE_ACTIVITIES } from '../actions/getAllActivitiesAction'


const reducer = (state = {} , action) => {
  switch (action.type) {
    case RSVP_TOGGLE:
      return state.map((activity) => {
        if (activity.activityId === action.activityId) {
          let newArray = rsvpReducer(R.values(activity.attendeeIds), action)
          activity.attendeeIds = newArray
        }
        return activity;

      })

    case CANCEL_RSVP:
      console.log('CANCEL_RSVP in getAllActivitiesReducer')
      return state


    case RECEIVE_ACTIVITIES:
      return action.activities;

    case DELETE_ACTIVITY:
      return state.filter((activity) => {
        if (activity.activityId === action.activityId) {
          if (action.currentUserId === action.activityCreatorId) {
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
