import data from './initialState'
import * as actions from '../actions/rsvpActions'

const INITIAL_STATE = data

const rsvp = (state = {}, action) => {
  switch(action.type) {
    case actions.RSVP_TOGGLE:
      let currentActivity = data.activities
        .find(act => action.activityId === act.id)
      // var activity = Object.assign({}, currentActivity)
      let activity = currentActivity
      console.log('attendeeIds = ', activity.attendeeIds)
      if (activity.attendeeIds.includes(action.attendeeId)) {
        // var i = activity.attendeeIds.indexOf(attendeeId)
        // if (i != -1) {}
        activity.attendeeIds.splice(5, 1)
      } else {
        activity.attendeeIds.push(action.attendeeId)
      }
      return activity
    default:
      return state
  }
}

export default rsvp
