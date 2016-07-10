import firebase from 'firebase'

firebase.initializeApp (
  {
    apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
    authDomain: "test-9eee4.firebaseapp.com",
    databaseURL: "https://test-9eee4.firebaseio.com",
    uiConfig: 'uiConfig'
  })

const db = firebase.database()

export const getActivitiesFromDB = (callback) => {
 db.ref('activities/')
  .on('value', (snapshot) => {
    callback(snapshot.val())
  })
}

// Initialize Firebase oAuth
firebase.auth().onAuthStateChanged(function(user) {
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
              document.getElementById('sign-in').textContent = 'Sign out';
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
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
          }
        }, function(error) {
          console.log(error);
        }
      );
      // firebase.auth().signOut()
      // firebase.auth().signInWithEmailAndPassword('ricky.kynd@gmail.com', 'googlegoo')

// using firebase UI sign in forms

var uiConfig = {
          // Query parameter name for mode.
          'queryParameterForWidgetMode': 'mode',
          // Query parameter name for sign in success url.
          'queryParameterForSignInSuccessUrl': 'signInSuccessUrl',
          'signInSuccessUrl': '/',
          'signInOptions': [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
          ],
          // Terms of service url.
          'tosUrl': '<your-tos-url>',
          'callbacks': {
            'signInSuccess': function(currentUser, credential, redirectUrl) {
              // Do something.
              // Return type determines whether we continue the redirect automatically
              // or whether we leave that to developer to handle.
              return true;
            }
          }
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
