import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div>
    <Link to='/'><h1>Landing</h1></Link>
    <Link to='Events'><button>Event </button></Link>
    <Link to='New-Event'><button>New Event </button></Link>
  </div>
)
