import React, { Component, PropTypes } from 'react'

class Input extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      type
    } = this.props


    const inputProps = {
      type
    }

    return <input {...inputProps} />
  }
  
}

Input.defaultProps = {
  type: 'text'
}


Input.propTypes = {
  type: PropTypes.string
}

export default Input
