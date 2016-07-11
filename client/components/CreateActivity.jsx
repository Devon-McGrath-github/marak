import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'

class CreateActivity extends Component {

  render() {
    const { fields: {title, subtitle, description, activityStart, activityEnd, formattedAddress, numberRequired, tasks}, handleSubmit, saveNewActivity } = this.props

    return (
      <div>
        <Link to='/'><h1>Home</h1></Link>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title: </label>
            <input type="text" placeholder="title" {...title}/>
          </div>
          <div>
            <label>Subtitle: </label>
            <input type="text" placeholder="subtitle" {...subtitle}/>
          </div>
          <div>
            <label>Description: </label>
            <textarea type="text" placeholder="description" {...description}></textarea>
          </div>
          <div>
            <label>Activity Start: </label>
            <input type="text" placeholder="activity start" {...activityStart}/>
          </div>
          <div>
            <label>Activity End: </label>
            <input type="text" placeholder="activity end" {...activityEnd}/>
          </div>
          <div>
            <label>Address: </label>
            <input type="text" placeholder="address" {...formattedAddress}/>
          </div>
          <div>
            <label>Number of Volunteers Requested: </label>
            <input type="text" placeholder="number" {...numberRequired}/>
          </div>
          <div>
            <label>Tasks: </label>
            <input type="text" placeholder="tasks" {...tasks}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

CreateActivity = reduxForm({
  form: 'createActivityForm',
  fields: ['title', 'subtitle','description', 'activityStart', 'activityEnd', 'formattedAddress', 'numberRequired', 'tasks']
})(CreateActivity)

export default CreateActivity
