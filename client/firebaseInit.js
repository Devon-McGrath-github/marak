import { db, auth } from './dbInit'

import firebase from 'firebase'
import R from 'ramda'

export const getActivitiesFromDB = (callback) => {
 db.ref('activities/')
  .on('value', (snapshot) => {
    callback(R.values(snapshot.val()))
  })
}

// Initialize Firebase oAuth
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var uid = user.uid;
    var providerData = user.providerData;
    user.getToken().then(function(accessToken) {
      document.getElementById('sign-in-status').textContent = user.displayName + ' ' + 'Signed in';
      document.getElementById('sign-in').innerHTML = '<button>' + 'Sign out' + '</button>';
      document.getElementById('account-details').textContent = JSON.stringify({
        displayName: displayName,
        email: email,
        emailVerified: emailVerified,
        photoURL: photoURL,
        uid: uid,
        accessToken: accessToken,
        providerData: providerData
      }, null, '  ');
    });
  } else {
      // User is signed out.
      // user.firebase.auth().signOut().then(function(user)) {
        document.getElementById('sign-in-status').innerHTML = '<button>' + 'Signed out' + '<button>';
        document.getElementById('sign-in').textContent = 'Sign in';
        document.getElementById('account-details').textContent = 'null';
    // }
  }
}, (error) => {
  console.log(error);
}
);

export const writeNewActivityToDB = (payload) => {
  // A post entry.

  // Get a key for a new Post.
  const newActivityKey = firebase.database().ref().child('activities/').push().key

  const newActivity = {
    title: payload.title,
    subtitle: payload.subtitle,
    description: payload.description,
    activityStart: payload.activityStart,
    activityEnd: payload.activityEnd,
    formattedAddress: payload.formattedAddress,
    numberRequired: payload.numberRequired,
    tasks: payload.tasks,
    activityId: newActivityKey,
    activityCreatorId: payload.uid
  }

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['activities/' + newActivityKey] = newActivity;

  return firebase.database().ref().update(updates)
}

export const deleteActivityFromDB = (activity) => {
  console.log(activity)
  return firebase.database().ref(`activities/${activity.activityId}`).remove()
}
