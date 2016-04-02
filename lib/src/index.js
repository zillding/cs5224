import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import {
  routerMiddleware,
  syncHistoryWithStore,
  routerReducer
} from 'react-router-redux'

import reducers from './reducers'
import Routes from './Routes'

const logger = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(
    routerMiddleware(browserHistory),
    thunk,
    logger
  )
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Routes history={history}/>
  </Provider>,
  document.getElementById('root')
)
