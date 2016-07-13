import React from 'react'
import { Link } from 'react-router'
import Auth from '../containers/AuthContainer'
import Nav from '../containers/NavContainer'


export default (props) => {
  let signedIn = props.auth.uid
  return (
  <div>
    <Nav />
    <div className="hero-image">
    <div className="hero-header">KARMA HIVE</div>
      <div className="hero-buttons">
        <div className="new-event">
          {signedIn ? <Link to='new-event'><button className="ui teal button landing-list-event"><span className="create-event-text">Create An Event</span></button></Link> : <a href="/login.html"><button className="ui teal button landing-list-event"><span className="create-event-text">Create An Event</span></button> </a>}
        </div>
        <div className="event-list">
          <Link to='event-list'><button className="ui olive button landing-create-event"><span className="events-list-text">Events Near Me</span></button></Link>
        </div>
      </div>
    </div>
    </div>
  )
}
