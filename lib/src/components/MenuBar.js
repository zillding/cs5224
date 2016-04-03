import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class MenuBar extends Component {
  componentDidMount() {
    $(this.refs.dropdown).dropdown()
  }

  render() {
    const { currentPathname } = this.props
    const getClassName = getItemClassName(currentPathname)

    return (
      <div className="ui inverted top fixed menu">
        <div ref="dropdown" className="ui dropdown item">
          Charts
          <i className="dropdown icon"></i>
          <div className="menu">
            <Link
              to="/"
              className={getClassName('')}>
              Enrolment & Graduates by Type of Courses
            </Link>
            <Link
              to="enrolvsgrad"
              className={getClassName('enrolvsgrad')}>
              Total Number of Enrolment vs Graduates Over Year
            </Link>
            <Link
              to="enrolandgrad2010"
              className={getClassName('enrolandgrad2010')}>
              Enrolment and Graduates in 2010 by Source
            </Link>
          </div>
        </div>
        <Link
          to="about"
          className={getClassName('about')}>
          About
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
