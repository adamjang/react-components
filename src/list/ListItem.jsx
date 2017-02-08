import { Component, PropTypes, createElement } from 'react'

class ListItem extends Component {

  getClasses() {
    const classes = []
    return classes.join(' ')
  }

  render() {
    const {
      children
    } = this.props

    const listProps = {
      className: this.getClasses()
    }

    return createElement('li', listProps, children)
  }

}

ListItem.defaultProps = {
  children: ''
}

ListItem.propTypes = {
  children: PropTypes.any
}

export default ListItem
