import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    events: React.PropTypes.array
  },
  render() {
    return (
      <div>
        <h1>Event List</h1>
        <ul>
          {this.props.events.map(function (activity) {
            return
            <li key={activity.id}>
              <Link to={`events/${activity.id}`}>{activity.subtitle}</Link>
            </li>
          })}
        </ul>
        <Link to="event-details"><button>View Details</button></Link>
      </div>
    )
  }
})
