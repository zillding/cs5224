import React, { Component } from 'react'
import { connect } from 'react-redux'

import Presentation from '../components/Presentation'

class PresentationPage extends Component {
  render() {
    return (
      <div>
        <Presentation/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const PresentationPageC = connect(
  mapStateToProps
)(PresentationPage)

export default PresentationPageC
