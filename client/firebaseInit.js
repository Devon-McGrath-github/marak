import firebase from 'firebase'
import R from 'ramda'

import {db} from './dbInit'

export const getActivitiesFromDB = (callback) => {
 db.ref('activities/')
  .on('value', (snapshot) => {
    callback(R.values(snapshot.val()))
  })
}

export const writeNewActivityToDB = (payload) => {
  // A post entry.
  const newActivity = {
    title: payload.title,
    subtitle: payload.subtitle,
    description: payload.description,
    activityStart: payload.activityStart,
    activityEnd: payload.activityEnd,
    formattedAddress: payload.formattedAddress,
    numberRequired: payload.numberRequired,
    tasks: payload.tasks

  }
  // Get a key for a new Post.
  const newActivityKey = firebase.database().ref().child('activities/').push().key

  newActivity.activityId = newActivityKey
  newActivity.activityCreatorId = 25 //hardcoding ID for now, will be updated when random key is inserted.

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['activities/' + newActivityKey] = newActivity;

  return firebase.database().ref().update(updates)
}
