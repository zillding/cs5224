import React, { Component, PropTypes } from 'react'
import find from 'lodash/find'
import ReactEcharts from 'react-echarts-component'

import { CHARTS_TYPES, CHARTS_NAMES } from './config'

class EnrolAndGrad2010Charts extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        {
          CHARTS_TYPES.map(type => (
              <div
                key={type}
                style={{padding: 20}}>
                <h3
                  className="ui header"
                  style={{textAlign: 'center'}}>
                  {`${capitalizeFirstLetter(type)} in Year 2010`}
                </h3>
                <ReactEcharts
                  height={500}
                  option={getOption(type)(data[type])} />
              </div>
            )
          )
        }
      </div>
    )
  }
}

EnrolAndGrad2010Charts.propTyps = {
  data: PropTypes.object.isRequired
}

export default EnrolAndGrad2010Charts

function getName(name) {
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

function getOption(type) {
  return data => {
    const series = [{
      name: type,
      type: 'pie',
      radius: '70%',
      center: ['50%', '60%'],
      data: CHARTS_NAMES.map(name => {
        return {
          value: find(data[name], { year: 2010 }).total,
          name: getName(name)
        }
      })
    }]
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: CHARTS_NAMES.map(getName)
      },
      series
    }
    return option
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
