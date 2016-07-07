import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducer'
import Landing from './containers/LandingContainer'
import EventList from './components/Landing'   //placeholder replace when exists
import CreateEvent from './components/Landing' //placeholder replace when exists

let store = createStore(
  reducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f

  )
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path='Events' component= {EventList} />
          <Route path='New-Event' component={CreateEvent} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
