import firebase from 'firebase'

const dbs = {
  // db test refers to the firebase project test, but test is a unique identifier
  dbTest: {
    apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
    authDomain: "test-9eee4.firebaseapp.com",
    databaseURL: "https://test-9eee4.firebaseio.com"
  },
  dbDataWhateva: {
    apiKey: "AIzaSyCCHgcbgLZFdq6MiL8-JPaGeC7sg_OrXgA",
    authDomain: "datawhateva.firebaseapp.com",
    databaseURL: "https://datawhateva.firebaseio.com",
  },
  dbShowAndHide: {
    apiKey: "AIzaSyDi_lNBTpCIGxCDOlrMXfYvdBPuQe_af48",
    authDomain: "showandhide-10013.firebaseapp.com",
    databaseURL: "https://showandhide-10013.firebaseio.com",
  }
}

// change the dbs. to whichever database you are using,
firebase.initializeApp(dbs.dbShowAndHide)

export const db = firebase.database()
