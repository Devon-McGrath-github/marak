import React from 'react'
import { connect } from 'react-redux'
// import { openAuth, logoutUser } from '../actions/auth'
import C from '../constants/authConstants'

import SignIn from './SignIn'
import SignUp from './SignUp'


export default (props) => {
    let email = null
    let password = null

  switch (props.auth.status) {
    case C.AUTH_LOGGED_IN: return (
      <div>
        <span>Logged in as {props.auth.username}.</span>
        <button onClick={props.logoutUser}>Log out</button>
      </div>
    )
    case C.AUTH_AWAITING_RESPONSE: return (
      <div>
        <button disabled>authenticating...</button>
      </div>
    )
    default: return (
      <div>
          {!props.auth.uid && <SignIn signIn={props.signIn} />}
          {!props.auth.uid && <SignUp signUp={props.signUp} />}
      </div>
    )
  }
}
// render() {
//   return this.props
// }
