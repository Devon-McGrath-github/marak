import { connect } from 'react-redux'
import Landing from '../components/Landing'
import { getActivities } from '../actions/getAllActivitiesAction'
import { signUp } from '../firebaseInit.js'


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => {
      dispatch(getActivities())
    },
    signUp: (email, password) => {
      dispatch(signUp(email, password))
  }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Landing)
