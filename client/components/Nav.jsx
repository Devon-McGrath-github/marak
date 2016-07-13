import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default (props) => {
  const signedIn = props.auth.uid !== null

  return (
    <div>
        <div className="ui olive menu hero-nav">
          <Link to='/'><a className="active item"><p>2 Hands</p></a></Link>
          <Link to='event-list'><a className="item" onClick={() => props.getActivities()}><p>Event List</p></a></Link>
          {signedIn ? <Link to='new-event'><a className="item"><p>Create Event</p></a></Link> : <a href="/login.html" className="item"><p>Create Event</p></a> }
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
