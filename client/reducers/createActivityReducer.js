import { CREATE_ACTIVITY, createActivity } from '../actions/createActivityActions.js'

const createActivityReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ACTIVITY:
      console.log(action.type)
    }



    return state
}

export default createActivityReducer
