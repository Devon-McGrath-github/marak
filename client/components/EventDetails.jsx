import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    activity: React.PropTypes.object
  },
  render () {
    let activity = this.props.activity
    let activityId = activity ? activity.activityId : 0
    let attendeeId = 10089

    let activityCreator = this.props.activityCreatorId
    let currentUserId = 56

    if (activity) {
      return (
        <div>
          <Link to='event-list'><button>Return</button></Link>
          <h1>Title: {activity.title}</h1>
          <h2>{activity.subtitle}</h2>
          <p>Description: {activity.description}</p>
          <p>Date: </p>
          <p>Location: {activity.location}</p>
          <p>Tasks: {activity.tasks}</p>
          <p>Requirments</p>
          <p>Number people attending: {this.props.length} / {activity.numberRequired} </p>

          <button onClick={() => { this.props.toggleRSVP(attendeeId, activityId)} }>RSVP</button>
          <button onClick={() => { this.props.deleteActivity(currentUserId, activityCreatorId, activityId)} }>Delete Event</button>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }

  }
})
