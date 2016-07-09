export const RSVP_TOGGLE = 'RSVP_TOGGLE'

export function toggleRSVP(attendeeId, activityId, isRSVPing) {
  return {
    type: RSVP_TOGGLE,
    attendeeId: attendeeId,
    activityId: activityId,
    isRSVPing: isRSVPing
  }
}
