import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import activities from './getAllActivitesReducer'
import currentUserId from './getUserInfoReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  activities: activities,
  currentUserId: currentUserId
}

const appReducer = combineReducers(reducers)

export default appReducer
