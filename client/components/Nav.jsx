import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default (props) => {
  return (
    <div>
        <div className="ui olive menu">
          <Link to='/'><a className="active item"><p>2 Hands</p></a></Link>
          <Link to='event-list'><a className="item" onClick={() => props.getActivities()}><p>Event List</p></a></Link>
          <Link to='new-event'><a className="item"><p>Create Event</p></a></Link>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item"><p>Logout</p></a>
          </div>
        </div>
   </div>
  )
}
