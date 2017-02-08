import { Component, PropTypes, createElement } from 'react'

class GridRow extends Component {

  getClasses() {
    const classes = ['row']
    return classes.join(' ')
  }

  render() {
    const {
      children
    } = this.props

    const gridRowProps = {
      className: this.getClasses()
    }

    return createElement('div', gridRowProps, children)
  }

}

GridRow.defaultProps = {
  children: ''
}

GridRow.propTypes = {
  children: PropTypes.any
}

export default GridRow
