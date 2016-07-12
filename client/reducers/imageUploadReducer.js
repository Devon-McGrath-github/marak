import * as actions from '../actions/uploadImagesActions'

const reducer = (state = '', action) => {
  switch (action.type) {
    case actions.IMAGE_UPLOAD_PROGRESS:
      console.log('in progress')
      return 'in progress'
    case actions.IMAGE_UPLOAD_SUCCESS:
      console.log('success')
      return 'success'
    default:
      console.log('nothing found')
      return state
  }
  return state
}

export default reducer
