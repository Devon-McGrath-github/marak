import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducer'

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
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
