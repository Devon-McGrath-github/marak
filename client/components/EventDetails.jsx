import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    activity: React.PropTypes.object,
    attendees: React.PropTypes.array
  },
  render () {
    let activity = this.props.activity
    let activityId = activity.id
    let attendeeId = 10089
    return (
      <div>
        <Link to='event-list'><button>Return</button></Link>
        <h1>Title: {activity.title}</h1>
        <h2>{activity.subtitle}</h2>
        <p>Description: {activity.description}</p>
        {/*<p>Date: {this.props.activity.date}, {activity.time}</p>
        <p>Location: {this.props.activity.location}</p>
        <p>Tasks: {this.props.activity.tasks}</p>
        <p>Requirments{this.props.activity.requirments}</p>*/}
        <p>Number people attending: {activity.attendeeIds.length} / {activity.numberRequired} </p>

          <button onClick={() => { this.props.toggleRSVP(attendeeId, activityId)}}>
          RSVP</button>

      </div>
    )
  }
})
