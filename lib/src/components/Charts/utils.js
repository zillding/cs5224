import flatten from 'lodash/flatten'
import config from './config'

export function getOptions(data) {
  const types = ['enrolment', 'graduates']
  const names = ['hd', 'ufd', 'pad', 'pd']

  const result = types.map(type => {
    return names.map(name => {
      const dataArray = data[type][name]
      const { headers, title } = config[type][name]
      return constructOption({
        headers,
        title
      })(dataArray)
    })
  })

  return flatten(result)
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
