import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = [ 'title', 'description']

const CreateActivity = React.createClass({
  handleSubmit (e) {
    console.log(e.title)
    console.log(e.description)
  },

  render() {
    const {
      fields: {title, description},
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
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
    );
  }
})

CreateActivity.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'createActivity',
  fields
})(CreateActivity)
