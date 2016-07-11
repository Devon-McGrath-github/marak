import { db, auth } from './dbInit'

export const getActivitiesFromDB = (callback) => {
 db.ref('activities/')
  .on('value', (snapshot) => {
    callback(snapshot.val())
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

  // firebase.auth().signInWithEmailAndPassword('ricky.kynd@gmail.com', 'googlegoo')

  // using firebase UI sign in forms
