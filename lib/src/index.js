import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import {
  routerMiddleware,
  syncHistoryWithStore,
  routerReducer
} from 'react-router-redux'

import  * as reducers from './reducers'
import Routes from './Routes'

const store = createStore(
  combineReducers(Object.assign({
    routing: routerReducer
  }, reducers)),
  applyMiddleware(
    routerMiddleware(browserHistory),
    thunk
  )
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Routes history={history}/>
  </Provider>,
  document.getElementById('root')
)
