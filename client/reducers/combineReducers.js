import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import activities from './getAllActivitesReducer'
import rsvp from './rsvpReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  activities,
  rsvp
}

const appReducer = combineReducers(reducers)

export default appReducer
