import data from './initialState'
import * as actions from '../actions/rsvpActions'

const INITIAL_STATE = data

const rsvp = (state = {}, action) => {
  switch(action.type) {
    case actions.RSVP_TOGGLE:
      let currentActivity = data.activities
        .find(act => action.activityId === act.id)

      if (currentActivity.attendeeIds.includes(action.attendeeId)) {
        var i = currentActivity.attendeeIds.indexOf(action.attendeeId)
        if (i != -1) { currentActivity.attendeeIds.splice(5, 1) }
      } else {
        currentActivity.attendeeIds.push(action.attendeeId)
      }
      return currentActivity
    default:
      return state
  }
}

export default rsvp
