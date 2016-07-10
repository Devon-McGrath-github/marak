import firebase from 'firebase'

import {db} from './dbInit'

export const getActivitiesFromDB = (callback) => {
 db.ref('activities/')
  .on('value', (snapshot) => {
    callback(snapshot.val())
  })
}

export const writeNewActivityToDB = (activityId, description) => {
  // A post entry.

  const newActivity = {
    activityId: activityId,
    description: description
  }

  // Get a key for a new Post.
  const newPostKey = firebase.database().ref().child('activities/').push().key

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['activities/' + newPostKey] = newActivity;

  return firebase.database().ref().update(updates);
}

// writeNewActivity(2, 'this is a test')




// const createActivityInDB = (activityId, description) => {
//  db.ref('activities/')
//   .set({
//     description: description
//   })
// }

// const createActivityInDB = (activityId, description) => {
//  db.ref('activities/')
//   .push({
//     description: description
//   })
// }

// createActivityInDB("activity1", "this is a test")
