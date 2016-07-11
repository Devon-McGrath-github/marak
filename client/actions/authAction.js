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

export const openAuth = () => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_OPEN });
    auth.createUserWithEmailAndPassword((email, password) => {
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
