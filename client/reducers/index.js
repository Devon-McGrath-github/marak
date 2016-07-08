import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import defaultReducer from './default'  // placeholder reducer


const appReducer = combineReducers({
  routing: routerReducer,
  defaultReducer
})

export default appReducer
