import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    activities: React.PropTypes.array
  },
  render() {
    return (
      <div>
        <div className="ui inverted blue menu">
          <Link to='/'><a className="active item">Home</a></Link>
          <Link to='new-event'><a className="item">Create Event</a></Link>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item">Logout</a>
          </div>
        </div>
        <h1>Events</h1>
            {this.props.activities.map(function (activity) {
              return (<Link to="event-details"><a><div className="ui divided items" key={activity.id}>
                <div className="item">
                  <div className="image">
                    <img src={activity.image}/>
                  </div>
                  <div className="content">
                    <div className="header">{activity.title}</div>
                    <div className="meta">
                      <span className="price">{activity.date}</span>
                    </div>
                    <div className="description">
                      <p>{activity.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div></a></Link>
            )})}
      </div>
      )
    }
  })
