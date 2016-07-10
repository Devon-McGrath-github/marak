import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

class CreateActivity extends Component {
  
  render() {
    const { fields: {title, description}, handleSubmit } = this.props

    return (
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
    )
  }
}

CreateActivity = reduxForm({
  form: 'createActivity',
  fields: ['title', 'description']
})(CreateActivity)

export default CreateActivity
