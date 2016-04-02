import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions'
import Loader from '../components/Loader'

class EnrolmentPage extends Component {
  componentWillMount() {
    this.props.onLoad()
  }

  render() {
    const {
      loadingData,
      data,
      error
    } = this.props

    if (loadingData || Object.keys(data).length === 0)
      return <Loader/>

    return (
      <div>
        Enrolment
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { loadingData, data, error } = state
  return {
    loadingData,
    data,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(fetchData())
  }
}

const EnrolmentPageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnrolmentPage)

export default EnrolmentPageComponent
