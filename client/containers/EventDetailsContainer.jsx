import { connect } from 'react-redux'
import R from 'ramda'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const activities = R.values(state.activities)
  console.log("edc", activities);
  const selectedActivity = activities.find((activity) => {
    return activity.id == ownProps.params.id
  })
  let activeActivityId = state.activities.activeActivityId
  activeActivityId = selectedActivity.id

  return {
    activity: selectedActivity,
    activeActivityId: activeActivityId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, activityId, isRSVPing) => dispatch(toggleRSVP(attendeeId, activityId, isRSVPing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
