import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'

export const fields = [ 'title', 'description']

export default (props) => (
  <div>
      <Link to='/'><h1>Home</h1></Link>
        <div>
            <h4>This is where the form should be</h4>
        </div>
  </div>
)
