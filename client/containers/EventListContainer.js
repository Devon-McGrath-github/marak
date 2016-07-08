import { connect } from 'react-redux'
import EventList from '../components/EventList'

const mapStateToProps = (state, ownProps) => {
  const activities = [{
    id: 1,
    title: 'beach cleanup',
    subtitle: 'this is a subtitle',
    date: '2016-06-29 23:10:33',
    image: './images/dirty-beach.jpg'
  },
  {
    id: 2,
    title: 'moving houses',
    subtitle: 'I need your help in moving houses',
    date: '2016-04-23 22:40:33',
    image: './images/moving-house.jpeg'
  }]

  return {
    activities: activities
  }
}

export default connect(mapStateToProps)(EventList)
