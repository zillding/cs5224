import React, { Component } from 'react'
import { connect } from 'react-redux'

import MenuBar from '../components/MenuBar'

const containerStyle = {
  position: 'fixed',
  top: 40,
  bottom: 0,
  left: 0,
  right: 0,
  padding: 15,
  overflow: 'auto'
}

const App = ({ currentPathname, children }) => (
  <div>
    <MenuBar currentPathname={currentPathname} />
    <div style={containerStyle}>
      { children }
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    currentPathname: ownProps.location.pathname
  }
}

const AppComponent = connect(
  mapStateToProps
)(App)

export default AppComponent
