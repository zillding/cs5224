import React, { Component, PropTypes } from 'react'
import find from 'lodash/find'
import ReactEcharts from 'react-echarts-component'

import { CHARTS_TYPES, CHARTS_NAMES } from './config'

class EnrolVsGradCharts extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        {
          CHARTS_NAMES.map(name => {
            const o = {
              enrolment: data.enrolment[name],
              graduates: data.graduates[name]
            }
            return (
              <Chart
                key={name}
                name={name}
                data={o} />
            )
          })
        }
      </div>
    )
  }
}

EnrolVsGradCharts.propTypes = {
  data: PropTypes.object.isRequired
}

export default EnrolVsGradCharts

const Chart = ({ name, data }) => (
  <div style={{padding: '15px 0'}}>
    <h3
      className="ui header"
      style={{textAlign: 'center'}}>
      { getChartTitle(name) }
    </h3>
    <ReactEcharts
      height={500}
      option={getOption(name)(data)} />
  </div>
)

function getChartTitle(name) {
  switch (name) {
    case 'hd':
      return 'Higher Degree'
    case 'ufd':
      return 'University First Degree'
    case 'pad':
      return 'Polytechnic Advanced Diploma'
    case 'pd':
      return 'Polytechnic Diploma'
    default:
      return ''
  }
}

/**
data: {
  enrolment: [],
  graduates: []
}
 */

function getOption(name) {
  return data => {
    const { enrolment, graduates } = data

    let xData = []
    if (enrolment.length > graduates.length) {
      xData = graduates.map(o => o.year)
    } else {
      xData = enrolment.map(o => o.year)
    }
    const series = CHARTS_TYPES.map(type => {
      const seriesData = xData.map(year =>
        find(data[type], { year }).total
      )
      return {
        name: type,
        type: 'line',
        data: seriesData
      }
    })

    const option = {
      grid: { bottom: 80 },
      tooltip : { trigger: 'axis' },
      legend: { data: CHARTS_TYPES },
      dataZoom: [{
        show: true,
        start: 0,
        end: 100
      }],
      xAxis : [{
        type : 'category',
        boundaryGap : false,
        axisLine: { onZero: false },
        data : xData
      }],
      yAxis: {},
      series
    }
    return option
  }
}

