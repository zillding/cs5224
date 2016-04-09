import range from 'lodash/range'
import find from 'lodash/find'
import filter from 'lodash/filter'
import startsWith from 'lodash/startsWith'
import React, { Component, PropTypes } from 'react'
import ReactEcharts from 'react-echarts-component'

import { CHARTS_NAMES } from './config'

const config = [{
  name: 'Information Technology',
  supply: 'Information Technology',
  demand: 'Information And Communications'
}, {
  name: 'Engineering Sciences',
  supply: 'Engineering Sciences',
  demand: 'Manufacturing'
}, {
  name: 'Services',
  supply: 'Services',
  demand: 'Services'
}, {
  name: 'Architecture',
  supply: 'Architecture & Building',
  demand: 'Architectural & Engineering Services'
}, {
  name: 'Business & Administration',
  supply: 'Business & Administration',
  demand: 'Professional, Managers, Executive & Technicians'
}, {
  name: 'Humanities & Social Sciences',
  supply: 'Humanities & Social Sciences',
  demand: ['Health & Social Services', 'Other Community, Social & Personal Services']
}]

class SupplyVsDemandCharts extends Component {
  render() {
    const { supply, demand } = this.props

    return (
      <div>
        {
          config.map((o, index) => (
            <div
              key={index}
              style={{padding: 20}}>
              <h3
                className="ui header"
                style={{textAlign: 'center'}}>
                {o.name}
              </h3>
              <ReactEcharts
                height={500}
                option={getOption(supply, demand, o)} />
            </div>
          ))
        }
      </div>
    )
  }
}

SupplyVsDemandCharts.propTypes = {
  supply: PropTypes.object.isRequired,
  demand: PropTypes.array.isRequired
}

export default SupplyVsDemandCharts

const years = range(2006, 2015)

function getGrads(data, year, course) {
  let result = 0
  CHARTS_NAMES.forEach(name => {
    const o = find(data[name], { year })
    result += o[course] || 0
  })
  return result
}

function getSupplyForOneYear(data, year, course) {
  if (typeof course === 'string')
    return getGrads(data, year, course)
  // can be an array
  let result = 0
  course.forEach(s => {
    result += getGrads(data, year, s)
  })
  return result
}

function getJV(data, year, course) {
  let sum = 0
  filter(data, ({ quarter }) => startsWith(quarter, `${year} `))
    .forEach(o => {
      sum += o[course] || 0
    })
  return sum
}

function getDemandForOneYear(data, year, course) {
  if (typeof course === 'string')
    return getJV(data, year, course)
  // can be an array
  let result = 0
  course.forEach(s => {
    result += getJV(data, year, s)
  })
  return result
}

function getOption(sData, dData, { supply, demand }) {
  const supplyData = years.map(year => getSupplyForOneYear(sData, year, supply))
  const demandData = years.map(year => getDemandForOneYear(dData, year, demand))

  const option = {
    tooltip: { trigger: 'axis' },
    legend: {
      data:['Supply', 'Demand']
    },
    xAxis: [{
      type: 'category',
      data: years
    }],
    yAxis: {},
    series: [{
      name: 'Supply',
      type: 'bar',
      data: supplyData
    }, {
      name: 'Demand',
      type: 'line',
      data: demandData
    }]
  }
  return option
}
