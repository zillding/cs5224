import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App'
import HomePage from './containers/HomePage'
import EnrolVsGradPage from './containers/EnrolVsGradPage'
import AboutPage from './containers/AboutPage'

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/enrolvsgrad" component={EnrolVsGradPage} />
      <Route path="/about" component={AboutPage} />
    </Route>
  </Router>
)

export default Routes