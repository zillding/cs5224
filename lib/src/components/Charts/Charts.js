import React, { Component, PropTypes } from 'react'
import ReactEcharts from 'react-echarts-component'

import { getOptions } from './utils'

class Charts extends Component {
  render() {
    const { data } = this.props
    const options = getOptions(data)

    return (
      <div>
        {
          options.map((option, index) => (
            <ReactEcharts
              key={index}
              height={500}
              option={option} />
          ))
        }
      </div>
    )
  }
}

Charts.propTypes = {
  data: PropTypes.object
}

export default Charts
