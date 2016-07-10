import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import activities from './getAllActivitesReducer'
import createActivityReducer from './createActivityReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  activities: activities,
  createActivityReducer: createActivityReducer
}

const appReducer = combineReducers(reducers)

export default appReducer
