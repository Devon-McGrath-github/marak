import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import CreateActivity from '../components/CreateActivity'

import { createActivity } from '../actions/createActivityActions'


const mapStateToProps = (state) => {
  return {
    fields: ['title', 'description']
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (payload) => {
      dispatch(createActivity(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
