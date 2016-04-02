import React, { Component } from 'react'

import MenuBar from '../containers/MenuBar'

const App = ({ children }) => (
  <div>
    <MenuBar/>
    { children }
  </div>
)

export default App
