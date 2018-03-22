import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'

const NavigateNext = ({ viewBox, style }) => (
    <Icon viewBox={viewBox} style={style}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  )

NavigateNext.defaultProps = {
  viewBox: '1 1 23 23',
  style: {}
}
NavigateNext.propTypes = {
  viewBox: PropTypes.string,
  style: PropTypes.string
}

export default NavigateNext