import React from 'react'
import { connect } from 'react-redux'
// import { openAuth, logoutUser } from '../actions/auth'
import C from '../constants/authConstants'


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
        <div>
            <h4>Sign In</h4>
            <form>
                <input type="email" name="email" placeholder="email" ref={(input) => email = input }></input>
                <input type="password" name="password" placeholder="password" ref={(input) => password = input }></input>
            </form>
            <button onClick={()=> {props.openAuth(email.value, password.value)}}>Please Log in</button>





        </div>
        <div>Sign Up</div>



      </div>
    )
  }
}
// render() {
//   return this.props
// }
