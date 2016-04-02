import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData, setVisibleLineCharts } from '../actions'
import { DEFAULT_CHARTS } from '../components/Charts/config'

import Charts from '../components/Charts/Charts'
import Loader from '../components/Loader'
import ChartsFilter from '../components/ChartsFilter'

class HomePage extends Component {
  componentWillMount() {
    this.props.onLoad()
  }

  _getCharts() {
    const { data, visibleLineCharts } = this.props

    if (visibleLineCharts && visibleLineCharts.length === 0)
      return null

    return (
      <div className="ui segment">
        <Charts
          data={data}
          visibleCharts={visibleLineCharts} />
      </div>
    )
  }

  render() {
    const {
      loadingData,
      data,
      error,
      onFilterChange
    } = this.props

    if (loadingData || Object.keys(data).length === 0)
      return <Loader/>

    const defaultCharts = []

    return (
      <div>
        <div className="ui segment">
          <div className="ui sub header">Charts Filter</div>
          <ChartsFilter
            defaultCharts={DEFAULT_CHARTS}
            onChange={charts => onFilterChange(charts)} />
        </div>
        { this._getCharts() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    loadingData,
    data,
    error,
    visibleLineCharts
  } = state

  return {
    loadingData,
    data,
    error,
    visibleLineCharts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(fetchData()),
    onFilterChange: charts => dispatch(setVisibleLineCharts(charts))
  }
}

const HomePageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageComponent
