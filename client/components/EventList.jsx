import React from 'react'
import R from 'ramda'
import { Link } from 'react-router'

export default (props) => {
  const activities = R.values(props.activities)
  return (
    <div>
    <Link to='/'><h1>Home</h1></Link>
    <h1>Events List</h1>
      {activities.map(function (activity) {
          return (
            <div key={activity.id}>
            <p>Title: {activity.title}</p>
            <p>subtitle: {activity.subtitle}</p>
            <p>Date: {activity.date}</p>
            <Link to={`/event-details/${activity.id}`}><button>View Details</button></Link>
            </div>
          )
          })
        }
  </div>
)
}
