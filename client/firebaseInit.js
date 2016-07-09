import firebase from 'firebase'

firebase.initializeApp(
  {
    apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
    authDomain: "test-9eee4.firebaseapp.com",
    databaseURL: "https://test-9eee4.firebaseio.com"
  })

const db = firebase.database()
export const auth = firebase.auth()

export const getActivitiesFromDB = (callback) => {
 db.ref('activities/')
  .on('value', (snapshot) => {
    callback(snapshot.val())
  })
}
