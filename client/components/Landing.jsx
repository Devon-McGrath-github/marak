import React from 'react'
import { Link } from 'react-router'
import Auth from '../containers/AuthContainer'

export default (props) => {
  let signedIn = props.auth.uid
  return (
  <div>
    <Link to='/'><h1>Home</h1></Link>
    <Link to='event-list'><button onClick={() => props.getActivities()}>Event List</button></Link>
    {signedIn ? <Link to='new-event'><button>New Event </button></Link> : <a href="/login.html"><button>New Event</button> </a>}

    <div id='reducer-test-div'>




    </div>
  </div>
)
}
