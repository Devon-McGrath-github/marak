import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'

export default React.createClass({
  propTypes: {
    activity: React.PropTypes.object
  },
  render () {
    let activity = this.props.activity
    let auth = this.props.auth

    let activityId = activity ? activity.activityId : 0
    let currentUserId = auth.uid
    let attendeeIds = activity.attendeeIds
    let activityCreatorId = activity.activityCreatorId

    let array = []


    if (activity) {
      return (
        <div>
          <Link to='/'><h1>Home</h1></Link>
          <Link to='event-list'><button>Return</button></Link>
          <h1>Title: {activity.title}</h1>
          <h2>{activity.subtitle}</h2>
          <p>Description: {activity.description}</p>
          <p>Date: {activity.activityStart && activity.activityEnd}</p>
          <p>Location: {activity.formattedAddress}</p>
          <p>Tasks: {activity.tasks}</p>
          <p>Number people attending: {this.props.length} / {activity.numberRequired} </p>

          <button onClick={() => { this.props.toggleRSVP(currentUserId, activityId, R.values(attendeeIds))} }>
            {R.values(activity.attendeeIds).map((attendeeId) => {
              if (attendeeId === currentUserId) {
                array.push(attendeeId)}
              })}
              { array.length >= 1 ? 'Cancel RSVP' : 'RSVP' }
          </button>

          <Link to='event-list'><button onClick={() => { this.props.deleteActivity(currentUserId, activityCreatorId, activityId)} }>Delete Event</button></Link>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }

  }
})
