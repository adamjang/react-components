import React, { Component, PropTypes } from 'react'


// # IMPORT COMPONENT CSS
// import './index.css'

/*
*
* ATTRIBUTES
*
* field: object provided by redux-form
* name: form name
* className: additional classes (string)
* type: input type
* label: wrap input in label element (boolean)
* label: input label text (string)
*
*/

class TextInput extends Component {

  constructor(props) {
    super(props)
    this.onClearInput = this.onClearInput.bind(this)
  }

  onClearInput(e) {
    this.props.onClearInput(e)
  }

  getClassNames() {
    const classNames = ['jbs-input']

    classNames.push(this.props.className)

    if(this.checkError()) {
      classNames.push('is-error')
    }

    return classNames.join(' ')
  }

  checkError() {
    return (this.props.error)
  }

  render() {
    const {
      defaultValue,
      error,
      name,
      label,
      disabled,
      type,
      placeholder
    } = this.props

    const elProps = {
      defaultValue,
      disabled,
      type,
      name,
      placeholder,
      className: this.getClassNames()
    }

    let el = (
      <input {...elProps} />
    )
    const labelText = (label !== '' && placeholder === '') ? (<span>{label}</span>) : ''

    if(label.length !== 0) {
      el = (
        <label htmlFor={name} className="jbs-label">
          {labelText}
          {el}
          {(this.checkError()) ? (
            <div className="jbs-error">
              <span className="jbs-error__message">{error}</span>
            </div>
          ) : null }
        </label>
      )
    }

    return el
  }

}

TextInput.defaultProps = {
  disabled: false,
  defaultValue: '',
  error: '',
  onChange: () => {},
  placeholder: '',
  label: '',
  type: 'text'
}


TextInput.propTypes = {
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onClearInput: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}

export default TextInput
