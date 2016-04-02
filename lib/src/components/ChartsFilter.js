import React, { Component, PropTypes } from 'react'
import flatten from 'lodash/flatten'

import { CHARTS_TYPES, CHARTS_NAMES } from './Charts/config'
import { getChartTitle } from './Charts/utils'

class ChartsFilter extends Component {
  componentDidMount() {
    $(this.refs.select).dropdown({
      onChange: value => {
        const result = value.map(parseChartValue)
        this.props.onChange(result)
      }
    })
  }

  render() {
    const defaultValue = getSelectDefaultValue(this.props.defaultCharts)

    return (
      <select
        ref="select"
        multiple
        name="skills"
        className="ui dropdown"
        defaultValue={defaultValue}>
        <option value="">Charts Filter</option>
        {
          getAllCharts().map(({ type, name }, index) =>
            <option
              key={index}
              value={getOptionValue(type, name)}>
              {getChartTitle(type, name)}
            </option>
          )
        }
      </select>
    )
  }
}

ChartsFilter.propTypes = {
  defaultCharts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ChartsFilter

function getAllCharts() {
  return flatten(CHARTS_TYPES.map(type => {
    return CHARTS_NAMES.map(name => {
      return {
        type,
        name
      }
    })
  }))
}

function getOptionValue(type, name) {
  return `${type}.${name}`
}

function getSelectDefaultValue(defaultCharts) {
  return defaultCharts.map(({ type, name }) =>
    getOptionValue(type, name)
  )
}

function parseChartValue(str) {
  const [ type, name ] = str.split('.')
  return { type, name }
}
