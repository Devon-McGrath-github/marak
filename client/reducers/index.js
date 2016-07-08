import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

import defaultReducer from './default'  // placeholder reducer
import getReducer from './getReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  defaultReducer,
  getReducer
}

const appReducer = combineReducers(reducers)

export default appReducer
