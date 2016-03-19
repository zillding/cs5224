import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions'
import Chart from './Chart'

class App extends Component {
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

    return (
      <div>
        <Chart data={data} />
      </div>
    )
  }
}

App.propTypes = {
  loadingData: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    waitingTime: PropTypes.object.isRequired
  })),
  error: PropTypes.object,
  onLoad: PropTypes.func.isRequired
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

const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppComponent
