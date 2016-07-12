import React from 'react'
import { Link } from 'react-router'
import Auth from '../containers/AuthContainer'

export default (props) => (
  <div>
    <Link to='/'><h1>Home</h1></Link>
    <Link to='event-list'><button onClick={() => props.getActivities()}>Event List</button></Link>
    <Link to='new-event'><button>New Event </button></Link>

    <div id='reducer-test-div'>




    </div>
  </div>
)
