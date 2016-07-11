import React from 'react'
import { connect } from 'react-redux'
// import { openAuth, logoutUser } from '../actions/auth'
import C from '../constants/authConstants'


export default (props) => {
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
        <button onClick={()=> {props.openAuth('ricky.kynd@gmail.com', 'googlegoo')}}>Please Log in</button>



      </div>
    )
  }
}
// render() {
//   return this.props
// }
