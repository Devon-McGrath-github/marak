import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import moment from 'moment'

import CreateActivity from '../components/CreateActivity'

import { createActivity } from '../actions/createActivityActions'
import { uploadImageRequest } from '../actions/uploadImagesActions'


const mapStateToProps = (state) => {
  return {
     initialValues: {uid: state.auth.uid, attendeeIds: [0], images: "https://firebasestorage.googleapis.com/v0/b/test-9eee4.appspot.com/o/images%2Fstock_photo.jpg?alt=media&token=5c33c8dc-c2bc-4c60-8457-4ec3d2c210d2"},
     imageUpload: state.imageUpload
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const a = 0
  return {
    onSubmit: (payload) => {
      dispatch(createActivity(payload))
    },
    uploadImageRequest: (url) => {
      dispatch(uploadImageRequest(url))
    },
    updateDate: (date) => {
      dispatch({type: 'redux-form/CHANGE', field: 'activityStart', value: date, touch: true, form: 'createActivityForm'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
