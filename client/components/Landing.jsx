import React from 'react'
import { Link } from 'react-router'
import Auth from '../containers/AuthContainer'
import Nav from '../containers/NavContainer'


export default (props) => {
  let signedIn = props.auth.uid
  return (
  <div className="hero-image">
    <Nav />
        <div className="hero-container">
          <div className="hero-header">
            <h1 className="hero-h1">MARAK</h1>
          </div>
          <div className="hero-description">
              <h3 className="hero-h3">Bacon ipsum dolor amet
                  bresaola ground round alcatra ball tip,
                  meatloaf spare ribs short loin doner shank.
                  Turkey bresaola pig leberkas. Tail pork belly
                  t-bone brisket, corned beef alcatra ground
                  round sirloin kielbasa. Pork loin tail
                  bacon cupim cow.</h3>
          </div>
          <div className="hero-button">
            <Link to='event-list'><button className="ui inverted black button"><span className="events-list-text">Events Near Me</span></button></Link>
          </div>
        </div>
  </div>
)
}
