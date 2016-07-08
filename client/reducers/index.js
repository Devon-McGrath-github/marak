import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

import getReducer from './getReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  activities: getReducer
}

const appReducer = combineReducers(reducers)

export default appReducer
