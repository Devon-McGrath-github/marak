import firebase from 'firebase'
import R from 'ramda'

firebase.initializeApp(
  {
    apiKey: "AIzaSyCCHgcbgLZFdq6MiL8-JPaGeC7sg_OrXgA",
    authDomain: "datawhateva.firebaseapp.com",
    databaseURL: "https://datawhateva.firebaseio.com",
  })

const db = firebase.database()
export const getActivitiesFromDB = (callback) => {
 db.ref('activities/')
  .on('value', (snapshot) => {
    callback(R.values(snapshot.val()))
  })
}
