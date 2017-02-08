import { Component, PropTypes, createElement } from 'react'

class GridColumn extends Component {

  getClasses() {
    const classes = ['columns']
    classes.push(this.props.columns)
    return classes.join(' ')
  }

  render() {
    const {
      children
    } = this.props

    const gridColumnProps = {
      className: this.getClasses()
    }

    return createElement('div', gridColumnProps, children)
  }

}

GridColumn.defaultProps = {
  children: '',
  columns: 'twelve'
}

GridColumn.propTypes = {
  children: PropTypes.any,
  columns: PropTypes.string
}

export default GridColumn
