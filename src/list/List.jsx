import { Component, PropTypes, createElement } from 'react'

class List extends Component {

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

List.defaultProps = {
  children: '',
  element: 'ul'
}

List.propTypes = {
  children: PropTypes.any,
  element: PropTypes.oneOf(['ul', 'ol'])
}

export default List
