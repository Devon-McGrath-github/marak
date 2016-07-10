import React from 'react'
import { Link } from 'react-router'

export default (props) => {
    let email
    let password
  return (<div>
    <Link to='/'><h1>Home</h1></Link>
    <Link to='event-list'><button onClick={() => props.getActivities()}>Event List</button></Link>
    <Link to='new-event'><button>New Event </button></Link>

    <form onSubmit = {e => {
        e.preventDefault()
        if (email.value && password.value) {
            console.log(email.value);
            props.signUp(email.value, password.value)
        }}}>
            <input ref={input => {email = input}} placeholder="email"/>
            <input ref={input => {password = input}} placeholder="password"/>
        <button type='submit'>Sign Up</button>
    </form>
    <div id='reducer-test-div'>

    </div>
</div>)
}
