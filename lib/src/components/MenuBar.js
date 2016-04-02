import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class MenuBar extends Component {
  render() {
    const { currentPathname } = this.props
    const getClassName = getItemClassName(currentPathname)

    return (
      <div className="ui inverted top fixed menu">
        <Link
          to="/"
          className={getClassName('')}>
          All
        </Link>
        <Link
          to="enrolment"
          className={getClassName('enrolment')}>
          Enrolment
        </Link>
        <Link
          to="graduates"
          className={getClassName('graduates')}>
          Graduates
        </Link>
      </div>
    )
  }
}

MenuBar.propTypes = {
  currentPathname: PropTypes.string
}

export default MenuBar

function getItemClassName(currentPathname) {
  if (currentPathname.startsWith('/'))
    currentPathname = currentPathname.slice(1)

  return pathname => {
    if (pathname === currentPathname)
      return 'active item'

    return 'item'
  }
}
