import { connect } from 'react-redux'

import EventDetails from '../components/EventDetails'

const mapStateToProps = (state, ownProps) => {
  const activity = state.activities.filter((activity) => {
    return activity.id === parseInt(ownProps.params.id)
  })[0]
  })

  return {
    activity: activity
  }
}

export default connect(mapStateToProps)(EventDetails)
