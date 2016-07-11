import { connect } from 'react-redux'
import R from 'ramda'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'
import { deleteActivity } from '../actions/deleteActivityAction'
// import { toggleDelete } from '../actions/toggleDeleteAction'

const mapStateToProps = (state, ownProps) => {
  const activities = state.activities
  const selectedActivity = activities.filter((activity) => {
      return activity.activityId == ownProps.params.id
    })[0]

  const currentUserId = state.currentUserId

  return {
    activity: selectedActivity,
    length: selectedActivity ? R.values(selectedActivity.attendeeIds).length : 0,
    currentUserId: currentUserId,
    showDelete: false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, activityId) => dispatch(toggleRSVP(attendeeId, activityId)),
    // toggleDelete: () => dispatch(toggleDelete()),
    deleteActivity: (currentUserId, activityCreatorId, activityId) => dispatch(deleteActivity(currentUserId, activityCreatorId, activityId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
