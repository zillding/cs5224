import React, { Component, PropTypes } from 'react'
import ReactEcharts from 'react-echarts-component'

import { getOneOption } from './utils'
import config from './config'

const headerStyle = {
  textAlign: 'center'
}

class Charts extends Component {
  render() {
    const { data, visibleCharts } = this.props

    return (
      <div>
        {
          visibleCharts.map(({ type, name }, index) => (
            <div
              key={index}
              style={{padding: '15px 0'}}>
              <h3
                className="ui header"
                style={headerStyle}>
                {config[type][name].title}
              </h3>
              <ReactEcharts
                height={500}
                option={getOneOption(data[type][name], type, name)} />
            </div>
          ))
        }
      </div>
    )
  }
}

Charts.propTypes = {
  data: PropTypes.object.isRequired,
  visibleCharts: PropTypes.array.isRequired
}

export default Charts
