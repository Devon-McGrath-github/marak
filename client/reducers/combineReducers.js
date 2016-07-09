import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import data from './getAllActivitesReducer'
import rsvp from './rsvpReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  activities: data,
  rsvp
}

const appReducer = combineReducers(reducers)

export default appReducer
