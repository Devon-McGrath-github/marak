import * as actions from '../actions/deleteActivityAction'
import {deleteActivityFromDB} from '../firebaseInit'

const deleteAct = (state = {}, action) => {
  deleteActivityFromDB(state.activity)
  debugger
}

export default deleteAct
