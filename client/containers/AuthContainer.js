import { connect } from 'react-redux'
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)
