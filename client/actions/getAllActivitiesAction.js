import { getActivitiesFromDB } from '../firebaseInit'

export const RECIEVE_ACTIVITIES = 'RECIEVE_ACTIVITIES'

const recieveActivities = (activities) => {
  return {
    type: RECIEVE_ACTIVITIES,
    activities: activities
  }
}

export const getActivities = () => {
  return (dispatch) => {
  getActivitiesFromDB((activities) => {
    dispatch(recieveActivities(activities))
})
}

}
