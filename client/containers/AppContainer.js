import { connect } from 'react-redux'

import App from '../components/App'
import { logoutUser } from '../actions/authAction'


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
