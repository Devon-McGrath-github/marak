import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import appReducer from './reducers'

import App from './components/App'
import Landing from './containers/LandingContainer'
import firebase from 'firebase'

firebase.initializeApp(
  {
    apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
    authDomain: "test-9eee4.firebaseapp.com",
    databaseURL: "https://test-9eee4.firebaseio.com"
  }
)

const db = firebase.database()
db.ref('users/2')
  .set({
    username: 'Joshua',
    email: 'email'
  })

db.ref('users/')
  .on('value', (snapshot) => {
    console.log(snapshot.val())
  })

import EventList from './containers/EventListContainer'

import EventDetails from './containers/EventDetailsContainer'

import CreateEvent from './containers/CreateEventContainer'


let store = createStore(
  appReducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path='event-list' component={EventList} />
          <Route path='new-event' component={CreateEvent} />
          <Route path='event-details' component={EventDetails} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
