import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App'
import HomePage from './containers/HomePage'
import EnrolVsGradPage from './containers/EnrolVsGradPage'
import EnrolAndGrad2010Page from './containers/EnrolAndGrad2010Page'
import JobVacanciesPage from './containers/JobVacanciesPage'
import SupplyVsDemandPage from './containers/SupplyVsDemandPage'
import AboutPage from './containers/AboutPage'
import PresentationPage from './containers/PresentationPage'

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/enrolvsgrad" component={EnrolVsGradPage} />
      <Route path="/enrolandgrad2010" component={EnrolAndGrad2010Page} />
      <Route path="/jv" component={JobVacanciesPage} />
      <Route path="/svsd" component={SupplyVsDemandPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/present" component={PresentationPage} />
    </Route>
  </Router>
)

export default Routes
