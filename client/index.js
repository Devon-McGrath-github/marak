import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducer'
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

let store = createStore(
  reducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f

  )
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
