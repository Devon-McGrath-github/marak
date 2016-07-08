import { connect } from 'react-redux'
import EventList from '../components/EventList'

const mapStateToProps = (state, ownProps) => {
  const activities = [{
    id: 1,
    title: 'beach cleanup',
    subtitle: 'this is a subtitle'
  },
  {
    id: 2,
    title: 'moving houses',
    subtitle: 'I need your help in moving houses'
  }]

  return {
    activities: activities
  }
}

export default connect(mapStateToProps)(EventList)
