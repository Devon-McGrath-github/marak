import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'


import CreateActivity from '../components/CreateActivity'

import { createActivity } from '../actions/createActivityActions'


const mapStateToProps = (state) => {
  return {
     initialValues: {uid: state.auth.uid}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (payload) => {
      debugger
      dispatch(createActivity(payload))
    },
    updateUrl: (url) => {
      dispatch({ type: 'redux-form/BLUR', field: "images", value: url, touch: true, form: 'createActivityForm'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
