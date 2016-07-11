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

    let activityCreatorId = activity.activityCreatorId
    let currentUserId = this.props.currentUserId


    // currentUserId === activityCreatorId ? 'block' : 'none'


    if (activity) {
      return (
        <div>

          <Link to='/'><h1>Home</h1></Link>
          <Link to='event-list'><button>Return</button></Link>

          <h1>Title: {activity.title}</h1>
          <h2>{activity.subtitle}</h2>
          <p>Description: {activity.description}</p>
          <p>Date: </p>
          <p>Location: {activity.location}</p>
          <p>Tasks: {activity.tasks}</p>
          <p>Requirments</p>
          <p id='ptest'>Number people attending: {this.props.length} / {activity.numberRequired} </p>

          <button id='rsvp' onClick={() => { this.props.toggleRSVP(attendeeId, activityId)} }>RSVP</button>
          <div >
            <Link to='event-list'><button id="deleteButton" onClick={() => { this.props.deleteActivity(currentUserId, activityCreatorId, activityId)} }>Delete Event</button></Link>
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }


  }
})
