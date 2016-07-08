import { connect } from 'react-redux'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(state.activities.activities);
  const selectedActivity = state.activities.activities.find((activity) => {
    return activity.id == ownProps.params.id
  })
  console.log(selectedActivity);
  return {
    activity: selectedActivity
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, activityId, isRSVPing) => dispatch(toggleRSVP(attendeeId, activityId, isRSVPing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
