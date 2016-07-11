import { connect } from 'react-redux'
import R from 'ramda'

import { logoutUser } from '../actions/authAction'

import Auth from '../components/Auth'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // signOut: logoutUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
