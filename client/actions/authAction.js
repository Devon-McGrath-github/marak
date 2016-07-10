import C from '../constants'
import firebase from 'firebase'

export const AUTH_LOGIN = 'AUTH_LOGIN'

firebase.initializeApp (
  {
    apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
    authDomain: "test-9eee4.firebaseapp.com",
    databaseURL: "https://test-9eee4.firebaseio.com",
    uiConfig: 'uiConfig'
  })

  export const listenToAuth = () => {
  	return (dispatch, getState) => {
  		firebase.auth().onAuthStateChanged(function(user) => {
  			if (user) {
  				dispatch({
  					type: C.AUTH_LOGIN,
  					uid: user.uid,
  					username: user.displayName
  				});
  			} else {
  				if (getState().auth.status !== C.AUTH_ANONYMOUS) {
  					dispatch({ type: C.AUTH_LOGOUT });
  				}
  			}
  		});
  	};
  };

  export const openAuth = () => {
  	return (dispatch) => {
  		dispatch({ type: C.AUTH_OPEN });
      firebase.auth().createUserWithEmailAndPassword(email, password) => {
  			if (error) {
  				dispatch({ type: C.FEEDBACK_DISPLAY_ERROR, error: `Login failed! ${error}` });
  				dispatch({ type: C.AUTH_LOGOUT });
  			}
  		});
  	};
  };

  export const logoutUser = () => {
  	return (dispatch) => {
  		dispatch({ type: C.AUTH_LOGOUT });
  		fireRef.unauth();
  	};
  };
