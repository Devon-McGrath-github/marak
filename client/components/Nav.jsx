import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default (props) => {
  const signedIn = props.auth.uid !== null

  return (
    <div>
        <div className="ui olive menu hero-nav">
          <Link to='/'><a className="active item"><p>2 Hands</p></a></Link>
          <Link to='event-list'><a className="item" onClick={() => props.getActivities()}><p>Event List</p></a></Link>
          {signedIn ? <Link to='new-event'><a className="item"><p>Create Event</p></a></Link> : <a href="/login.html" className="item"><p>Create Event</p></a> }
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
                {signedIn ?
                <button className="ui item" onClick={props.logoutUser}>Logout</button> :
                <a href="/login.html" className="ui item">Sign In / Sign up</a>}
          </div>
        </div>
   </div>
  )
}
//if (this.props.auth.status === 'AUTH_LOGGED_IN') {
//         return (
//             <div>
//                 <div>
//                     <h5>This is the nav bar</h5>
//                     <p>Logged in as {this.props.auth.username}</p>
//                     <button onClick={this.props.logoutUser}>Sign Out</button>
//                 </div>
//                <div>
//                   {this.props.children}
//                 </div>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//               <div>
//
//                   {/*<Link to='auth'><button>Sign In</button></Link>
//                   <a href="/login.html">Sign In</a>
//                   <Link to='sign-up'><button>Sign Up</button></Link>*/}
//
//                   <h5>This is the nav bar</h5>
//
//                   {/*<Link to='auth'><button>Sign In</button></Link>*/}
//                   <a href="/login.html"><button>Sign In</button></a>
//                   <Link to='sign-up'><button>Sign Up</button></Link>
//
//               </div>
//               <div>
//                   {this.props.children}
//               </div>
//           </div>
//       )
//     }
