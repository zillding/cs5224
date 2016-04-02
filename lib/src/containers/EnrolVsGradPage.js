import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions'

import Loader from '../components/Loader'
import EnrolVsGradCharts from '../components/Charts/EnrolVsGradCharts'

class EnrolVsGradPage extends Component {
  componentWillMount() {
    this.props.onLoad()
  }

  render() {
    const {
      loadingData,
      data
    } = this.props

    if (loadingData || Object.keys(data).length === 0)
      return <Loader/>

    return (
      <div>
        <h1 className="ui header">
          Total Number of Enrolment vs Graduates Over Year
        </h1>
        <div className="ui segment">
          <EnrolVsGradCharts data={data} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    loadingData,
    data
  } = state

  return {
    loadingData,
    data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(fetchData())
  }
}

const EnrolVsGradPageC = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnrolVsGradPage)

export default EnrolVsGradPageC
