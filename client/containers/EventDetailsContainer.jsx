import { connect } from 'react-redux'
import R from 'ramda'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'
import { deleteActivity } from '../actions/deleteActivityAction'

const mapStateToProps = (state, ownProps) => {
  const activities = state.activities
  console.log('state', state);
  const selectedActivity = activities.filter((activity) => {
    console.log('EventDetailsContainer', activities)
    console.log('event details container', activity);
      return activity.activityId == ownProps.params.id
    })[0]

  return {
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
