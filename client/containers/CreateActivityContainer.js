import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import CreateActivity from '../components/CreateActivity'

import { createActivity } from '../actions/createActivityActions'


const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
