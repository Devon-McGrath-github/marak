import { connect } from 'react-redux'
import R from 'ramda'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'
import { deleteActivity } from '../actions/deleteActivityAction'

const mapStateToProps = (state, ownProps) => {
  const activities = R.values(state.activities)
  const selectedActivity = activities.filter((activity) => {
      return activity.id == ownProps.params.id
    })[0]

  return {
    activity: selectedActivity,
    activityCreator: selectedActivity.activityCreator,
    length: selectedActivity ? R.values(selectedActivity.attendeeIds).length : 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, activityId, isRSVPing) => dispatch(toggleRSVP(attendeeId, activityId, isRSVPing)),
    deleteActivity: (currentUserId, activityCreatorId, activityId) => dispatch(deleteActivity(currentUserId, activityCreatorId, activityId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
