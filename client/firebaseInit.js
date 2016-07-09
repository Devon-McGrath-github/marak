import firebase from 'firebase'

firebase.initializeApp(
  {
    apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
    authDomain: "test-9eee4.firebaseapp.com",
    databaseURL: "https://test-9eee4.firebaseio.com"
  })

const db = firebase.database()

export const getActivitiesFromDB = (callback) => {
 db.ref('activities/')
  .on('value', (snapshot) => {
    callback(snapshot.val())
  })
}

export const writeNewActivity = (activityId, description) => {
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
