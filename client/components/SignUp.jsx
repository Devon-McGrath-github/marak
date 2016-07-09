import React from 'react'
import firebase from 'firebase'

export default (props) => (
  <div>
    <h1>Sign Up</h1>
    <p>{firebase.auth().currentUser.uid}</p>
  </div>
)
