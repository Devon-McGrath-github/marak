import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    if (this.props.auth.status === 'AUTH_LOGGED_IN') {
        return (
            <div>
                <div>
                    <h5>This is the nav bar</h5>
                    <p>Logged in as {this.props.auth.username}</p>
                    <button onClick={this.props.logoutUser}>Sign Out</button>
                </div>
               <div>
                  {this.props.children}
                </div>
            </div>
        )
    } else {
        return (
            <div>
              <div>
                  {/*<Link to='auth'><button>Sign In</button></Link>*/}
                  <a href="/login.html">Sign In</a>
                  <Link to='sign-up'><button>Sign Up</button></Link>
              </div>
              <div>
                  {this.props.children}
              </div>
          </div>
      )
    }
  }
})


//             {/* put nave here <Nav />*/}
//             <div>
//
//                 <Link to='auth'><button>Sign In</button></Link>
//                 <button onClick={this.props.logoutUser}>Sign Out</button>
//                 <div>
//                     <p>{this.state.username}</p>
//                 </div>
//             </div>
//
//           <div>
//             {this.props.children}
//           </div>
//     </div>
