import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'

const NavigateDown = ({ viewBox, style }) => (
    <Icon viewBox={viewBox} style={style} className="expand_button">
        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" className="expand_button" />
        <path d="M0-.75h24v24H0z" fill="none" />
    </Icon>
    )

NavigateDown.defaultProps = {
viewBox: '1 1 23 23',
style: {}
}
NavigateDown.propTypes = {
viewBox: PropTypes.string,
style: PropTypes.shape({})
}

export default NavigateDown