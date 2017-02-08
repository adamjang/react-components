import { Component, PropTypes, createElement } from 'react'

class Heading extends Component {

  getClasses() {
    const classes = []
    return classes.join(' ')
  }

  render() {
    const {
      children,
      element
    } = this.props

    const headingProps = {
      className: this.getClasses()
    }

    return createElement(element, headingProps, children)
  }

}

Heading.defaultProps = {
  children: '',
  element: 'h1'
}

Heading.propTypes = {
  children: PropTypes.string,
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

export default Heading
