import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

import defaultReducer from './default'  // placeholder reducer

const appReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  defaultReducer
}

const appReducer = combineReducers(reducers)

export default appReducer
