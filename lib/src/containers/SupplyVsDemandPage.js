import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData, fetchJVData } from '../actions'

import Loader from '../components/Loader'
import SupplyVsDemandCharts from '../components/Charts/SupplyVsDemandCharts'

class SupplyVsDemandPage extends Component {
  componentWillMount() {
    this.props.onLoad()
  }

  render() {
    const {
      loadingData,
      data,
      jvData
    } = this.props

    if (loadingData || jvData.length === 0)
      return <Loader/>

    return (
      <div>
        <h1 className="ui header">
        Supply (Graduates) and Demand (Job Vacancies) By Industry And Occupational Group
        </h1>
        <div className="ui segment">
          <SupplyVsDemandCharts
            supply={data.graduates}
            demand={jvData} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    loadingData,
    data,
    jvData
  } = state

  return {
    loadingData,
    data,
    jvData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(fetchData())
      dispatch(fetchJVData())
    }
  }
}

const SupplyVsDemandPageC = connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplyVsDemandPage)

export default SupplyVsDemandPageC
