import React from 'react'
import R from 'ramda'
import { Link } from 'react-router'
import Nav from './Nav'

export default (props) => {
  const activities = R.values(props.activities)
  return (
    <div>
    <Nav />
    <div className="banner">
      <div className="banner-title">Events</div>
    </div>
      <div className="divider"></div>
      <div className="ui container">
          {activities.map(function (activity) {
            return (<Link to={`/event-details/${activity.activityId}`}>
              <a><div className="ui gaps items" key={activity.id}>
              <div key={activity.id} className="item">
                <div className="image">
                  <img src={activity.images}/>
                </div>
                <div className="content">
                  <div className="header"><p>{activity.title}</p></div>
                  <div className="meta">
                    <span className="price"><p>{activity.activityStart}</p></span>
                    <span className="stay"><p>{activity.subtitle}</p></span>
                  <div className="description"><p>{activity.description}</p></div>
                  </div>
                </div>
              </div>
              </div>
              </a></Link>
            )})}
      </div>
    </div>
  )}
