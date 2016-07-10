import { writeNewActivityToDB } from '../firebaseInit'
import { getActivities } from './getAllActivitiesAction'

export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'

export const pushActivityToDB = (data) => {
  return {
    type: CREATE_ACTIVITY
  }
}

export const createActivity = (payload) => {
  debugger;
  return (dispatch) => {
    console.log("writing to db")
    writeNewActivityToDB()
  }
}
