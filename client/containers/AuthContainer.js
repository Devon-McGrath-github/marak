import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Auth from '../components/Auth'
import { openAuth, logoutUser } from '../actions/authAction'


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    },
    openAuth: (username, password) => {
      debugger
      dispatch(openAuth(username, password))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)
