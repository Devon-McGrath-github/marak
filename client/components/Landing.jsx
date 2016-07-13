import React from 'react'
import { Link } from 'react-router'
import Auth from '../containers/AuthContainer'
import Nav from './Nav'


export default (props) => {
  let signedIn = props.auth.uid
  return (
    <div>
      <Nav />
      <div className="hero-image">
      <div className="hero-header"><p>KARMA HIVE</p></div>
      <div className="opac-overlay"></div>
        <div className="hero-buttons">
          <div className="new-event">
            <Link to='new-event'><button className="ui teal button"><span className="create-event-text">Create An Event</span></button></Link>
          </div>
          <div className="event-list">
            <Link to='event-list'><button className="ui olive button"><span className="events-list-text">Events Near Me</span></button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// DO NOT DELETE ****************************
//<Auth />
// <div id='reducer-test-div'></div>
// <div id="firebaseui-auth-container"></div>
// <Link to='/'><h1>Home</h1></Link>
// <Link to='event-list'><button onClick={() => props.getActivities()}>Event List</button></Link>
// <Link to='new-event'><button>New Event </button></Link>
//
// <div id='reducer-test-div'>
