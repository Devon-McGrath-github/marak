import * as actions from '../actions/rsvpActions'

const rsvp = (state = [], action) => {
      let attendeeId = action.attendeeId
      if (state.includes(attendeeId)) {
        return state.filter(id => attendeeId !== id)
      } else {
        return state.concat([attendeeId])
      }
}

export default rsvp
