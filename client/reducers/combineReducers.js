import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import getAllActivitesReducer from './getAllActivitesReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  activities: getAllActivitesReducer
}

const appReducer = combineReducers(reducers)

export default appReducer
