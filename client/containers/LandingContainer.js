import { connect } from 'react-redux'
import Landing from '../components/Landing'
import { getActivities } from '../actions/getAllActivitiesAction'
import { getUserInfo } from '../actions/getUserInfoAction'



const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => {
      dispatch(getActivities())
    },
    getUserInfo: () => {
      dispatch(getUserInfo())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Landing)
