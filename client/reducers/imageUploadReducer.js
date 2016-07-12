import * as actions from '../actions/uploadImagesActions'

const reducer = (state = '', action) => {
  console.log(action)
  switch (action.type) {
    case actions.UPLOAD_IMAGE_PROGRESS:
      console.log('in progress')
      return 'in progress'
    case actions.UPLOAD_IMAGE_SUCCESS:
      console.log('success')
      return 'success'
    default:
      console.log('nothing found')
      return state
  }
  return state
}

export default reducer
