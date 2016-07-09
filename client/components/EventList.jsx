import React from 'react'
import { Link } from 'react-router'

// export default React.createClass({
//   propTypes: {
//     activities: React.PropTypes.array
//   },
//   render() {
//     console.log(this.props.activities);
//     return (
//       <div>
//         <Link to='/'><h1>Home</h1></Link>
//         <h1>Event List</h1>
//           {this.props.activities.map(function (activity) {
//             return (
//               <div key={activity.id}>
//               <p>Title: {activity.title}</p>
//               <p>subtitle: {activity.subtitle}</p>
//               <p>Date: {activity.date}</p>
//               <Link to={`/event-details/${activity.id}`}><button>View Details</button></Link>
//             </div>
//           )
//
//           })}
//       </div>
//     )
//   }
// })

export default (props) => {
  console.log('Props from eventlist',props);
  return (
    <div>
    <h1>Events List</h1>

  </div>
)
}
