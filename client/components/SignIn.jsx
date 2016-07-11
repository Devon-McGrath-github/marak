import React from 'react'

export default (props) => {
    let email = null
    let password = null
  return (
  <div>
      <h4>Sign In</h4>
      <form onSubmit={(e)=> {
              e.preventDefault()
              props.signIn(email.value, password.value)
          }}>
          <input type="email" name="email" placeholder="email" ref={(input) => email = input }></input>
          <input type="password" name="password" placeholder="password" ref={(input) => password = input }></input>
          <input type="submit" value="Sign In" />
      </form>
  </div>
)
}
