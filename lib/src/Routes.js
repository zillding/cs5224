import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './containers/HomePage'

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
)

export default Routes
