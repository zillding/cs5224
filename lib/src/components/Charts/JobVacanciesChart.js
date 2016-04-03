import React, { Component, PropTypes } from 'react'
import ReactEcharts from 'react-echarts-component'

class JobVacanciesChart extends Component {
  render() {
    return (
      <ReactEcharts
        height={500}
        option={getOption(this.props.data)} />
    )
  }
}

JobVacanciesChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default JobVacanciesChart

const seriesKeys = [
  // 'Goods Producing Industries',
  'Manufacturing',
  // 'Food, Beverages & Tobacco',
  // 'Paper/Rubber/Plastic Products & Printing',
  // 'Petroleum, Chemical & Pharmaceutical Products',
  // 'Fabricated Metal Products, Machinery & Equipment',
  // 'Electronic, Computer & Optical Products',
  // 'Transport Equipment,Other Manufacturing Industries',
  'Construction',
  // 'Services',
  'Wholesale And Retail Trade',
  // 'Wholesale Trade',
  // 'Retail Trade',
  'Transportation And Storage',
  // 'Land Transport & Supporting Services',
  // 'Water Transport & Supporting Services',
  // 'Air Transport & Supporting Services',
  // 'Other Transport & Storage Services',
  'Accommodation And Food Services',
  // 'Accommodation',
  // 'Food & Beverage Services',
  // 'Information And Communications',
  'Telecommunications, Broadcasting & Publishing',
  'IT & Other Information Services',
  'Financial And Insurance Services,Financial Services',
  // 'Insurance Services,Real Estate Services',
  // 'Professional Services',
  // 'Legal, Accounting & Management Services',
  // 'Architectural & Engineering Services',
  // 'Other Professional Services',
  'Administrative And Support Services',
  // 'Security & Investigation',
  // 'Cleaning & Landscaping',
  // 'Other Adminstrative & Support Services',
  'Community, Social And Personal Services',
  // 'Public Administration & Education',
  // 'Health & Social Services',
  // 'Other Community, Social & Personal Services',
  // 'Arts, Entertainment & Recreation',
  'Others'
  // 'Professional, Managers, Executive & Technicians',
  // 'Clerical, Sales And Services Workers',
  // 'Production & Transport Operators, Cleaners & Labourers'
]

function getOption(data) {
  const xData = data.map(o => o.quarter)
  const series = seriesKeys.map(key => {
    const seriesData = data.map(o => o[key])
    return {
      name: key,
      type: 'line',
      data: seriesData
    }
  })

  const option = {
    grid: { bottom: 80 },
    tooltip : { trigger: 'axis' },
    legend: { data: seriesKeys },
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

