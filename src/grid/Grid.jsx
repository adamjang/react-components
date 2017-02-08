import { Component, PropTypes, createElement } from 'react'

class Grid extends Component {

  getClasses() {
    const classes = ['grid']
    return classes.join(' ')
  }

  render() {
    const {
      children
    } = this.props

    const gridProps = {
      className: this.getClasses()
    }

    return createElement('div', gridProps, children)
  }

}

Grid.defaultProps = {
  children: null
}

Grid.propTypes = {
  children: PropTypes.any
}

export default Grid
