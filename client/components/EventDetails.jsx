import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'
import Nav from './Nav'
import ReactDisqusThread from 'react-disqus-thread'

import hasRSVPed from '../utilities/hasRSVPed'

export default React.createClass({
  propTypes: {
    activity: React.PropTypes.object
  },

  render () {
    if (!this.props.activity) {
      return (
        <div>Loading...</div>
      )
    }

    let activity = this.props.activity
    let auth = this.props.auth

    let activityId = activity ? activity.activityId : 0
    let currentUserId = auth.uid
    let attendeeIds = activity.attendeeIds
    let activityCreatorId = activity.activityCreatorId
    let showDelete = currentUserId === activityCreatorId

    if (activity) {
      return (
        <div>
          <Nav />
          {/* PHOTO CARD */}
            <div className="ui divided grid">
              <div className="four wide column">
                <div className="ui image">
                  <a className="poster-image">
                    <img className="ui image" src={activity.images}/>
                  </a>
                </div>
              </div>

              {/* TITLE HEADER BOX */}
              <div id="desc-column" className="twelve wide column">
                <h1 className="event-details-title ui center aligned">{activity.title}</h1>
                <h2 className="subtitle-header">{activity.subtitle}</h2>
              </div>

                {/* EVENT DETAILS BOX */}
                <div className="event-deets four wide column">
                  <h1>Event Details</h1>
                  <div className="content">
                      <a className="header">{activity.title}</a>
                      <p>Location: {activity.formattedAddress}</p>
                      <p>Tasks: {activity.tasks}</p>
                    <div className="meta">
                      <span className="date">{activity.activityStart && activity.activityEnd}</span>
                        <p>Number people attending: {this.props.length - 1 } / {activity.numberRequired} </p>
                    </div>
                    <button className="ui negative button" onClick={() => { this.props.toggleRSVP(currentUserId, activityId, attendeeIds)} }>
                      { this.props.hasRSVPed(attendeeIds, currentUserId) ? 'Cancel RSVP' : 'RSVP' }
                    </button>
                      {showDelete ? <Link to='event-list'><button className="ui positive basic button" onClick={() => { this.props.deleteActivity(currentUserId, activityCreatorId, activityId)} }>Delete Event</button></Link> : null}
                    </div>
                </div>

                {/* EVENT Description BOX */}
                <div className="desc-box twelve wide column olive">
                  <h3>Description: <br/> {activity.description}</h3>
                </div>

                <div className="four wide column teal">
                  <h1>Empty container</h1>
                </div>

                <div className="twelve wide column purple">
                  <div id="disqus">
                  <ReactDisqusThread
                    shortname='unityhivekarma'
                    identifier={activity.activityId}
                    title={activity.title}
                    url="https://test-9eee4.firebaseapp.com/" />
                  </div>
                </div>
            </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      )
    }
  }
})
