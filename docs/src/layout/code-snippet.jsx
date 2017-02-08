import React, { Component, PropTypes } from 'react'

class CodeSnippet extends Component {

  render() {
    const {
      html
    } = this.props

    return (
      <pre className="code-example">
        <code>
          <div></div>
          { html }
        </code>
      </pre>
    )
  }

}

CodeSnippet.propTypes = {
  html: PropTypes.string.isRequired
}

export default CodeSnippet
