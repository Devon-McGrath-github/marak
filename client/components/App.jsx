import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
    <div>
            {/* put nave here <Nav />*/}
            <div>
                <h5>This is the nav bar</h5>
                <Link to='auth'><button>Sign In</button></Link>
                <button onClick={this.props.logoutUser}>Sign Out</button>
            </div>
          <div>
            {this.props.children}
          </div>
    </div>
    )
  }
})
