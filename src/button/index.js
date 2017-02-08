import React, { Component, PropTypes } from 'react'

class Button extends Component {

  getClasses() {
    const classes = ['button']

    if(this.props.type) {
      classes.push(`button-${this.props.type}`)
    }

    return classes.join(' ')
  }

  render() {
    const {
      children
    } = this.props


    const buttonProps = {
      className: this.getClasses()
    }

    return (
      <button {...buttonProps}>
        {children}
      </button>
    )
  }

}

Button.defaultProps = {
  children: '',
  type: null
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['primary'])
}

export default Button
