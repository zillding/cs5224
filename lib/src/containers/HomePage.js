import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions'
import Charts from '../components/Charts/Charts'

class HomePage extends Component {
  componentWillMount() {
    this.props.onLoad()
  }

  render() {
    const {
      loadingData,
      data,
      error
    } = this.props

    if (loadingData) return <p>Loading data...</p>
    if (Object.keys(data).length === 0) return null

    return (
      <div>
        <Charts data={data} />
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

const HomePageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageComponent
