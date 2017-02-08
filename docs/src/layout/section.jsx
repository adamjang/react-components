import React, { Component, PropTypes } from 'react'

class Section extends Component {

  render() {
    const {
      children,
      title
    } = this.props

    return (
      <div className="docs-section">
        <h6 className="docs-header">{ title }</h6>
        { children }
      </div>
    )
  }

}

Section.defaultProps = {
  title: ''
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string
}

export default Section
