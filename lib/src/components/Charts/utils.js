import flatten from 'lodash/flatten'
import config, { CHARTS_TYPES, CHARTS_NAMES } from './config'

export function getChartTitle(type, name) {
  let first = ''
  switch (type) {
    case 'enrolment':
      first = 'Enrolment In'
      break
    case 'graduates':
      first = 'Graduates From'
      break
    default:
      break
  }
  let second = ''
  switch (name) {
    case 'hd':
      second = 'Higher Degree'
      break
    case 'ufd':
      second = 'University First Degree'
      break
    case 'pad':
      second = 'Polytechnic Advanced Diploma'
      break
    case 'pd':
      second = 'Polytechnic Diploma'
      break
    default:
      break
  }
  return `${first} ${second} Courses`
}

export function getOneOption(data, type, name) {
  const { headers, title } = config[type][name]
  return constructOption({
    headers,
    title
  })(data)
}

function constructOption({ headers, title }) {
  return data => {
    const xData = data.map(o => o.year)
    const series = headers.map(name => {
      const seriesData = data.map(o => o[name])
      return {
        name,
        type: 'line',
        data: seriesData
      }
    })

    const option = {
      grid: { bottom: 80 },
      tooltip : { trigger: 'axis' },
      legend: {
        data: headers
      },
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
