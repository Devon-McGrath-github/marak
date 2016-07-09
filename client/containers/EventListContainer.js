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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventList)
