import { connect } from 'react-redux'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'

const mapStateToProps = (state, ownProps) => {
  const selectedActivity = state.activities.filter((activity) => {
    return activity.id == ownProps.params.id
  })[0]
  return {
    activity: selectedActivity,
    length: selectedActivity.attendeeIds.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, activityId, isRSVPing) => dispatch(toggleRSVP(attendeeId, activityId, isRSVPing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
