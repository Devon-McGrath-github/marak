import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import activities from './getAllActivitesReducer'
import auth from './authReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  activities: activities,
  auth: auth
}

const appReducer = combineReducers(reducers)

export default appReducer
