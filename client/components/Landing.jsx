import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div>
    <div className="ui inverted blue menu">
      <Link to='/'><a className="active item">Home</a></Link>
      <Link to='event-list'><a className="item">Events</a></Link>
      <Link to='new-event'><a className="item">Create Event</a></Link>
    <div className="right menu">
      <div className="item">
        <div className="ui icon input">
          <input type="text" placeholder="Search..."/>
          <i className="search link icon"></i>
        </div>
      </div>
      <a className="ui item">Login</a>
      </div>
    </div>
  </div>
)
