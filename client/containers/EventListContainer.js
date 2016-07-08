import { connect } from 'react-redux'
import EventList from '../components/EventList'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    activities: state.activities.activities
  }
}

export default connect(mapStateToProps)(EventList)
