import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    questions: React.PropTypes.object
  },
  render () {
    return (
      <div>
        <Link to='event-list'><button>Return</button></link>
        <h1>Title: {this.props.activity.title}</h1>
        <h2>{this.props.activity.subtitle}</h2>
        <p>Description: {this.props.activity.description}</p>
        <p>Date: {this.props.activity.date}, {activity.time}</p>
        <p>Location: {this.props.activity.location}</p>
        <p>Tasks: {this.props.activity.tasks}</p>
        <p>Requirments{this.props.activity.requirments}</p>
        <Link to='event-details'>
          <button onSubmit= () => {
              console.log('increase the counter')
          }>
          RSVP</button>
        </Link>
      </div>
    )
  }
})