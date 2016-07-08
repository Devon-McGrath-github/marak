import React from 'react'
import firebase from 'firebase'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { toggleRSVP } from './actions/rsvpActions'
import appReducer from './reducers/combineReducers'

import Landing from './containers/LandingContainer'
import EventList from './containers/EventListContainer'
import CreateEvent from './containers/CreateEventContainer'
import EventDetails from './containers/EventDetailsContainer'
import App from './components/App'
import EventList from './containers/EventListContainer'

import EventDetails from './containers/EventDetailsContainer'

import CreateEvent from './containers/CreateEventContainer'

firebase.initializeApp(
  {
    apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
    authDomain: "test-9eee4.firebaseapp.com",
    databaseURL: "https://test-9eee4.firebaseio.com"
  })

const db = firebase.database()


// db.ref('users/2')
  // .set({
  //   description: 'Let have fun',
  // })


db.ref('activities/')
  .on('value', (snapshot) => {
    console.log('Firebase data',snapshot.val())
  })

let store = createStore(
  appReducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path='event-list' component={EventList}/>
          <Route path='event-details/:id' component={EventDetails} />
          <Route path='new-event' component={CreateEvent} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
