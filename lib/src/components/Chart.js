import React, { Component, PropTypes } from 'react'
import ReactEcharts from 'react-echarts-component'


class Chart extends Component {
  render() {
    const { data } = this.props
    const option = constructOption(data)

    return (
      <ReactEcharts
        height={500}
        option={option} />
    )
  }
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    waitingTime: PropTypes.object.isRequired
  }))
}

export default Chart

function constructOption(data) {
  const legendData = ['TTSH', 'CGH', 'SGH', 'NUH(A)', 'NTFGH', 'KTPH']
  const xData = data.map(o => o.date)
  const series = legendData.map(name => {
    const seriesData = data.map(o => o.waitingTime[name])
    return {
      name,
      type: 'line',
      data: seriesData
    }
  })

  const option = {
    title : {
      text: 'Waiting Times (50th Percentile) for Admission from ED',
      subtext: 'Source : Weekly Hospital Submissions'
    },
    grid: { bottom: 80 },
    tooltip : { trigger: 'axis' },
    legend: { data: legendData },
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
