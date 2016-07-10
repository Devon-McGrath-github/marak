import React from 'react'
import { Link } from 'react-router'
import FormComponent from './FormComponent.jsx'

export default (props) => (
  <div>
      <Link to='/'><h1>Home</h1></Link>
        <div>
            <FormComponent />
        </div>
  </div>
)
