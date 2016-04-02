import React, { Component, PropTypes } from 'react'

class Loader extends Component {
  render() {
    const { size = 'large' } = this.props

    return (
      <div className="ui active inverted dimmer">
        <div className={`ui ${size} text loader`}>
          Loading...
        </div>
      </div>
    )
  }
}

Loader.propTypes = {
  size: PropTypes.string
}

export default Loader
