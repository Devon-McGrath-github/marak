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
              <p>something{activity.title}</p>
              <Link to={`events`}>{activity.subtitle}</Link>
            </div>)
          })}
        <Link to="event-details"><button>View Details</button></Link>
      </div>
    )
  }
})
