import data from './initialState'
import * as actions from '../rsvpActions'

const INITIAL_STATE = data

// type: RSVP_TOGGLE,
// attendeeId: attendeeId,
// activityId: activityId,
// isRSVPing: isRSVPing

// activity.attendeeIds.inlcudes(attendeeId)

const rsvp = (state = {}, action) => {
  switch(action.type) {
    case actions.RSVP_TOGGLE
      let currentActivity = data.activities
        .find(act => act.id === activityId)
      let activity = Object.assign({}, state.currentActivity)


      if (!isRSVPing) {
        activity.activityIds.push({
          id: action.attendeeId
        })
        return activity
      } else {
        activity.activityIds.
      }
    }
}

let activeActivityId = state.activities.activeActivityId
activeActivityId = selectedActivity.id


activity.attendeeIds
