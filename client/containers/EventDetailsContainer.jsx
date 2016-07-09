import { connect } from 'react-redux'
import R from 'ramda'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'

const mapStateToProps = (state, ownProps) => {
  const activities = R.values(state.activities)
  const selectedActivity = activities.filter((activity) => {
      return activity.id == ownProps.params.id
    })[0]

  return {
    activity: selectedActivity,
    length: selectedActivity ? R.values(selectedActivity.attendeeIds).length : 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, activityId, isRSVPing) => dispatch(toggleRSVP(attendeeId, activityId, isRSVPing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
