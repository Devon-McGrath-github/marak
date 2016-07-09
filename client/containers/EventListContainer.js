import { connect } from 'react-redux'
import EventList from '../components/EventList'

const mapStateToProps = (state, ownProps) => {
  console.log("event list container", state);
  return {
    activities: state.activities
  }
}

export default connect(mapStateToProps)(EventList)
