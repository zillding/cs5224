import React, { Component } from 'react'

class Presentation extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <iframe
          src="https://docs.google.com/presentation/d/1b_UViocfJ3jhgbaw06W75ulfvjifDWhb7XRtGAtDMJM/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen="true"
          mozAllowFullScreen="true"
          webkitAllowFullScreen="true">
        </iframe>
      </div>
    )
  }
}

export default Presentation
