import rsvpReducer from './rsvpReducer'
import deleteActivityReducer from './deleteActivityReducer'
import { DELETE_ACTIVITY } from '../actions/deleteActivityAction'
import * as actions from '../actions/rsvpActions'
import {RECIEVE_ACTIVITIES} from '../actions/getAllActivitiesAction'
import R from 'ramda'


const reducer = (state = {} , action) => {
  switch (action.type) {
    case actions.RSVP_TOGGLE:
      state = R.values(state)
      return state.map((activity) => {
        if (activity.id === action.activityId) {
          let newArray = rsvpReducer(R.values(activity.attendeeIds), action)
          activity.attendeeIds = newArray
        }
        return activity;
      })

    case RECIEVE_ACTIVITIES:
      return action.activities;

    case DELETE_ACTIVITY:
      state = R.values(state)
      return state.map((activity) => {
        if (activity.id === deleteActivity.activityId) {
          if (currentUserId === deleteActivity.activityCreatorId) {
            deleteActivityReducer(deleteActivity, deleteActivity)
          }
        }
      })
    default:
      return state;
  }
}

export default reducer
