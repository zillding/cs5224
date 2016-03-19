import React, { Component, PropTypes } from 'react'
import ReactEcharts from 'react-echarts-component'

const option = {
  title : {
    text: 'Waiting Times (50th Percentile) for Admission from ED',
    subtext: 'Source : Weekly Hospital Submissions',
    x: 'center',
    align: 'right'
  },
  grid: {
    bottom: 80
  },
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['TTSH','CGH'],
    x: 'left'
  },
  dataZoom: [
    {
      show: true,
      realtime: true,
      start: 0,
      end: 100
    },
    {
      type: 'inside',
      realtime: true,
      start: 60,
      end: 80
    }
  ],
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
      axisLine: {onZero: false},
      data : ['2016/2/28', '2016/2/29']
    }
  ],
  yAxis: {},
  series: [
    {
      name:'TTSH',
      type:'line',
      data:[3.9, 4.8]
    },
    {
      name:'CGH',
      type:'line',
      data: [1.2, 2.6]
    }
  ]
};

class Chart extends Component {
  render() {
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
