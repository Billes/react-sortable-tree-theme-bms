import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({
  children,
  viewBox,
  style
}) => (
    <svg
      fill="rgba(0,0,0,0.57)"
      style={{
        width: 20,
        height: 20,
        ...style
      }}
      viewBox={viewBox}
    >
      {children}
    </svg>
  )

  Icon.defaultProps = {
    children: {},
    viewBox: '1 1 23 23',
    style: {}
  }
  Icon.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    viewBox: PropTypes.string,
    style: PropTypes.shape({})
  }

export default Icon