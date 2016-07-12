import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'


import CreateActivity from '../components/CreateActivity'

import { createActivity } from '../actions/createActivityActions'
import { uploadImageRequest } from '../actions/uploadImagesActions'


const mapStateToProps = (state) => {
  return {

     initialValues: {uid: state.auth.uid, attendeeIds: [0]},
     imageUpload: state.imageUpload
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (payload) => {
      dispatch(createActivity(payload))
    },
    uploadImageRequest: (url) => {
      dispatch(uploadImageRequest(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
