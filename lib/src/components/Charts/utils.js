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
  return `${first}\n${second} Courses`
}

export function getOptions(data, visibleCharts) {
  if (visibleCharts) {
    return visibleCharts.map(({ type, name }) =>
      getOneOption(data, type, name)
    )
  }

  const result = CHARTS_TYPES.map(type => {
    return CHARTS_NAMES.map(name => getOneOption(data, type, name))
  })

  return flatten(result)
}

function getOneOption(data, type, name) {
  const dataArray = data[type][name]
  const { headers, title } = config[type][name]
  return constructOption({
    headers,
    title
  })(dataArray)
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
      title : {
        text: title,
        subtext: 'Source : annual'
      },
      grid: { bottom: 80 },
      tooltip : { trigger: 'axis' },
      legend: {
        data: headers,
        left: 400
      },
      dataZoom: [{
        show: true,
        realtime: true,
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
