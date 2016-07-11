export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'

import { getActivities } from './getAllActivitiesAction'
import { deleteActivityFromDB } from '../firebaseInit'

export const deleteActivityRequest = (currentUserId, activityCreatorId, activityId) => {
  return (dispatch) => {
    dispatch(deleteActivity(currentUserId, activityCreatorId, activityId))
    deleteActivityFromDB({currentUserId, activityCreatorId, activityId})
      .then((result) => {
        dispatch(getActivities())

      })
  }
}

export const deleteActivity = (currentUserId, activityCreatorId, activityId) => {
  return {
   type: DELETE_ACTIVITY,
   currentUserId: currentUserId,
   activityCreatorId: activityCreatorId,
   activityId: activityId
  }
}
