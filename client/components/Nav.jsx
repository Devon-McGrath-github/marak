import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default (props) => {
  const signedIn = props.auth && props.auth.uid

  return (
    <div>
        <div className="ui olive menu hero-nav">
          <Link to='/' className="active item"><p>Marak</p></Link>
          <Link to="event-list" className="item" onClick={() => props.getActivities()}><p>Event List</p></Link>
          {signedIn ? <Link to="new-event" className="item"><p>Create Event</p></Link> : <a href="/login.html" className="item"><p>Create Event</p></a> }
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
            {signedIn ?
            <button className="ui item" onClick={props.logoutUser}>Logout</button> :
            <a href="/login.html" className="ui item">Sign In / Sign up</a>}
          </div>
        </div>
   </div>
  )
}
