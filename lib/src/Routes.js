import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App'
import HomePage from './containers/HomePage'
import EnrolmentPage from './containers/EnrolmentPage'
import GraduatesPage from './containers/GraduatesPage'

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/enrolment" component={EnrolmentPage} />
      <Route path="/graduates" component={GraduatesPage} />
    </Route>
  </Router>
)

export default Routes
