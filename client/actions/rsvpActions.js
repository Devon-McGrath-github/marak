import { getActivities } from './getAllActivitiesAction'
import { addAttendeeIdToDB, removeAttendeeId } from '../firebaseInit'

export const RSVP_TOGGLE = 'RSVP_TOGGLE'
export const CANCEL_RSVP = 'CANCEL_RSVP'

export const addAttendeeRequest = (attendeeId, activityId, attendeeIds) => {
  return (dispatch) => {
    dispatch(toggleRSVP(attendeeId, activityId, attendeeIds))
    addAttendeeIdToDB({attendeeId, activityId, attendeeIds})
    .then((result) => {
      dispatch(getActivities())
    })
  }
}

export const removeAttendeeRequest = (attendeeId, activityId, attendeeIds) => {
  return (dispatch) => {
    dispatch(toggleRSVP(attendeeId, activityId, attendeeIds))
    removeAttendeeId({attendeeId, activityId, attendeeIds})
      .then((result) => {
        dispatch(getActivities())
      })
  }
}

export const toggleRSVP = (attendeeId, activityId, attendeeIds) => {
  let variableAction = attendeeIds.includes(attendeeId) ? CANCEL_RSVP : RSVP_TOGGLE

  return {
    type: variableAction,
    attendeeId: attendeeId,
    activityId: activityId,
    attendeeIds: attendeeIds
  }
}
