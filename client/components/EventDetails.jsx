import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'
import Nav from './Nav'

export default React.createClass({
  propTypes: {
    activity: React.PropTypes.object
  },

  render () {
    let activity = this.props.activity
    let auth = this.props.auth

    let activityId = activity ? activity.activityId : 0
    let currentUserId = auth.uid

    let activityCreatorId = activity.activityCreatorId

    let array = []


    if (activity) {
      return (
        <div>
          <Nav />
          {/* PHOTO CARD */}
          <div className="ui grid">
            <div className="four wide column red">
              <div className="ui card">
                <div className="image">
                  <img class="ui circular image" src="./images/profile.jpg"/>
                </div>
                <div className="content">
                  <a className="header">{activity.title}</a>
                <div className="meta">
                  <span className="date">{activity.activityStart && activity.activityEnd}</span>
                  <span>Number people attending: {this.props.length} / {activity.numberRequired} </span>
                </div>
                <button className="ui negative button" onClick={() => { this.props.toggleRSVP(currentUserId, activityId)} }>
                    {R.values(activity.attendeeIds).map((attendeeId) => {
                      if (attendeeId === currentUserId) {
                        array.push(attendeeId)}
                      })}
                      { array.length === 1 ? 'Cancel RSVP' : 'RSVP' }
                </button>
                <Link to='event-list'><button className="ui positive basic button" onClick={() => { this.props.deleteActivity(currentUserId, activityCreatorId, activityId)} }>Delete Event</button></Link>
                </div>
              </div>
            </div>

             {/* DESCRIPTION BOX */}
             <div id="desc-column" className="twelve wide column blue">
              <h2 className="ui center aligned icon header"><i className="calendar users icon"></i>{activity.title}</h2>
                <div className="description">{activity.description}</div>
                <div>
                <p>Location: {activity.formattedAddress}</p>
                <p>Tasks: {activity.tasks}</p>
              </div>
            </div>
            <div id="disqus_thread"></div>
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
