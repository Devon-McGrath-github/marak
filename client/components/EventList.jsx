import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    activities: React.PropTypes.array
  },
  render() {
    return (
      <div>
        <h1>Event List</h1>
          {this.props.activities.map(function (activity) {
            return (<div key={activity.id}>
              <p>Title: {activity.title}</p>
              <p>subtitle: {activity.subtitle}</p>
              <p>Date: {activity.date}</p>
              <Link to={`event-details/${activity.id}`}><button>View Details</button></Link>
            </div>)
          })}
      </div>
    )
  }
})
