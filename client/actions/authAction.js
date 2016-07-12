import C from '../constants/authConstants'
import firebase from 'firebase'

import { auth } from '../dbInit'

export const AUTH_LOGIN = 'AUTH_LOGIN'

export const listenToAuth = () => {
	return (dispatch, getState) => {
		auth.onAuthStateChanged((user) => {
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

export const signUp = (email, password) => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_OPEN })
    // dispatch({ type: C.SIGN_UP })
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {

      console.log(error.code, error.message)
    })
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_LOGOUT });
		auth
      .signOut()
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error.code, error.message)
      })
	};
};
