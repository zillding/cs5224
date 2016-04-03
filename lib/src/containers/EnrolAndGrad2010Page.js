import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions'

import Loader from '../components/Loader'
import EnrolAndGrad2010Charts from '../components/Charts/EnrolAndGrad2010Charts'

class EnrolAndGrad2010Page extends Component {
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
          Total Number of Enrolment and Graduates in 2010 by Source
        </h1>
        <div className="ui segment">
          <EnrolAndGrad2010Charts data ={data} />
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

const EnrolAndGrad2010PageC = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnrolAndGrad2010Page)

export default EnrolAndGrad2010PageC
