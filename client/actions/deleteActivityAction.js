export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'

export function deleteActivity(currentUserId, activityCreatorId, activityId) {
  return {
    type: DELETE_ACTIVITY,
    currentUserId: currentUserId,
    activityCreatorId: activityCreatorId,
    activityId: activityId
  }
}
