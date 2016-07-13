import { connect } from 'react-redux'

import Nav from '../components/Nav'
import { getActivities } from '../actions/getAllActivitiesAction'


const mapStateToProps = (state) => {
  let auth = state.auth.uid
  if (auth) {
    return {
      signedIn: true
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => {
      dispatch(getActivities())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav)
