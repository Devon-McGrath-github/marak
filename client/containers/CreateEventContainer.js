import { connect } from 'react-redux'
import CreateEvent from '../components/CreateEvent'

import { createActivity } from '../actions/createActivityActions'


const mapStateToProps = (state) => {
  console.log("create event", state)
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createActivty: () => {
      dispatch(createActivty())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)
