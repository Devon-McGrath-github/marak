import { connect } from 'react-redux'

import EventDetails from '../components/EventDetails'
import * from '../rsvpActions'

const mapStateToProps = (state, ownProps) => {
  const activity = state.activities.filter((activity) => {
    return activity.id === ownProps.params.id[0]
  })
  return {
    activity: activity
  }
}

const mapStateToDispatch = (dispatch) => {
  return 
}

export default connect(mapStateToProps)(EventDetails)
