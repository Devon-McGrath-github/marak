import { getUserInfoFromDB } from '../firebaseInit'

export const RECIEVE_USERINFO = 'RECIEVE_USERINFO'

const recieveUserInfo = (currentUser) => {
  return {
    type: RECIEVE_USERINFO,
    currentUser: currentUser
  }
}

export const getUserInfo = () => {
  return (dispatch) => {
    getUserInfoFromDB((currentUser) => {
      dispatch(recieveUserInfo(currentUser))
    })
  }
}
