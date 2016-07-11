import { connect } from 'react-redux'
import R from 'ramda'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'
import { deleteActivity } from '../actions/deleteActivityAction'

const mapStateToProps = (state, ownProps) => {
  const auth = state.auth
  const activities = state.activities
  const selectedActivity = activities.filter((activity) => {
      return activity.activityId == ownProps.params.id
    })[0]

  return {
    auth: auth,
    activity: selectedActivity,
    length: selectedActivity ? R.values(selectedActivity.attendeeIds).length : 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, activityId) => dispatch(toggleRSVP(attendeeId, activityId)),
    deleteActivity: (currentUserId, activityCreatorId, activityId) => dispatch(deleteActivity(currentUserId, activityCreatorId, activityId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
