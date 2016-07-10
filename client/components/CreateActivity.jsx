import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'

class CreateActivity extends Component {

  render() {
    const { fields: {title, description}, handleSubmit } = this.props

    return (
      <div>
        <Link to='/'><h1>Home</h1></Link>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title: </label>
            <input type="text" placeholder="title" {...title}/>
          </div>
          <div>
            <label>Description: </label>
            <input type="text" placeholder="description" {...description}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

CreateActivity= reduxForm({
  form: 'createActivityForm',
  fields: ['title', 'description']
})(CreateActivity)

export default CreateActivity
