import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchJVData } from '../actions'

import Loader from '../components/Loader'
import JobVacanciesChart from '../components/Charts/JobVacanciesChart'

class JobVacanciesPage extends Component {
  componentWillMount() {
    this.props.onLoad()
  }

  render() {
    const {
      loadingData,
      jvData
    } = this.props

    if (loadingData || jvData.length === 0)
      return <Loader/>

    return (
      <div>
        <h1 className="ui header">
        Job Vacancies By Industry And Occupational Group
        </h1>
        <div className="ui segment">
          <JobVacanciesChart data={jvData} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    loadingData,
    jvData
  } = state

  return {
    loadingData,
    jvData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(fetchJVData())
  }
}

const JobVacanciesPageC = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobVacanciesPage)

export default JobVacanciesPageC
