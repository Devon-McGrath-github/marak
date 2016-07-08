// import attendeeIdsArray from '../dummy/questions'
import * as actions from '../rsvpActions'

const rsvp = (state = {}, action) => {
  switch(action.type) {
    case action.RSVP_TOGGLE
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
