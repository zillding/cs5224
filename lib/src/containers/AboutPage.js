import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import About from '../components/About'

class AboutPage extends Component {
  render() {
    return (
      <div className="ui segment">
        <h2>About This Project</h2>
        <About/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const AboutPageC = connect(
  mapStateToProps
)(AboutPage)

export default AboutPageC
