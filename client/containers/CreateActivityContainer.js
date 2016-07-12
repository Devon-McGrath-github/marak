import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import CreateActivity from '../components/CreateActivity'

import { createActivity } from '../actions/createActivityActions'


const mapStateToProps = (state) => {
  return {
     initialValues: {uid: state.auth.uid, attendeeIds: [state.auth.uid]},
     selectedDate: state.form.createActivityForm ? state.form.createActivityForm.activityStart.value : ''
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (payload) => {
      debugger
      dispatch(createActivity(payload))
    },
    updateDate: (date) => {
      dispatch({type: 'redux-form/CHANGE', field: 'activityStart', value: date, touch: true, form: 'createActivityForm'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
