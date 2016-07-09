import data from './initialState'
import * as actions from '../actions/rsvpActions'

const INITIAL_STATE = data

// type: RSVP_TOGGLE,
// attendeeId: attendeeId,
// activityId: activityId,
// isRSVPing: isRSVPing

const rsvp = (state = {}, action) => {
  switch(action.type) {
    case actions.RSVP_TOGGLE:

      // for (var i = 0; i < data.activities.length; i++) {
      //   if (data.activities[i].id === action.activityId) {
      //     console.log('nested if evaluated true')
      //     var currentActivity = data.activities[i]
      //     console.log('currentActivity = ', currentActivity)
      //   } else {
      //
      //   }
      // }

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
        activity.attendeeIds.push(attendeeId)
      }

      return state.activity

    default:
      return state
  }
}

export default rsvp
