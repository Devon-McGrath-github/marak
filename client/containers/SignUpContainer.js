import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import firebase from 'firebase'

const mapStateToProps = (state) => {
  firebase.auth()
    .signInWithEmailAndPassword('foo@bar.com', 'wombat')
    .catch((err) => {
      console.error(err)
    })
  return {}
}

export default connect(mapStateToProps)(SignUp)
