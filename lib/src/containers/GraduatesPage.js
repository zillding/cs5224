import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions'
import Loader from '../components/Loader'

class GraduatesPage extends Component {
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
      <div>GraduatesPage</div>
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

const GraduatesPageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraduatesPage)

export default GraduatesPageComponent
