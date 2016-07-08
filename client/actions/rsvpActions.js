export const RSVP_TOGGLE = 'RSVP_TOGGLE'

export function toggleRSVP(activityId, attendeeId, isRSVPing) {
  return {
    type: RSVP_TOGGLE,
    attendeeId: attendeeId,
    activityId: activityId,
    isRSVPing: isRSVPing
  }
}

export function functionName() {

}
