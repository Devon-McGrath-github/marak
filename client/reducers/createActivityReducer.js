import { CREATE_ACTIVITY, pushActivityToDB } from '../actions/createActivityActions.js'

const createActivityReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ACTIVITY:
      console.log(action.type)

    }



    return state
}

export default createActivityReducer
