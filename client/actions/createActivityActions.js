import { writeNewActivityToDB } from '../firebaseInit'
import { getActivities } from './getAllActivitiesAction'

export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'

export const createActivity = (payload) => {
    debugger
  return (dispatch) => {

    writeNewActivityToDB(payload)
      .then(() => {
        dispatch(getActivities())
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
