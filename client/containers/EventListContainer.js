import { connect } from 'react-redux'
import EventList from '../components/EventList'

import { getActivities } from '../actions/getAllActivitiesAction'

const mapStateToProps = (state, ownProps) => {
  return {
    activities: state.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => {
      dispatch(getActivities())
    },
    toggleDelete: () => {
      dispatch(toggleDelete())
    },
    getUserInfo: () => {
      dispatch(getUserInfo())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventList)
