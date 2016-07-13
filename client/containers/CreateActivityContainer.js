import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'


import CreateActivity from '../components/CreateActivity'

import { createActivity } from '../actions/createActivityActions'
import { uploadImageRequest } from '../actions/uploadImagesActions'


const mapStateToProps = (state) => {
  return {

     initialValues: {uid: state.auth.uid, attendeeIds: [0], images: "https://firebasestorage.googleapis.com/v0/b/marak-d99b3.appspot.com/o/images%2Fstock_activity_image.jpg?alt=media&token=aae693db-5d25-44fe-bcf4-40e208451af0"},
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
