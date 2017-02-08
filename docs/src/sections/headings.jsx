import React, { Component } from 'react'

// # LAYOUT
import Section from '../layout/section'
import { Heading } from 'skeleton'

class HeadingSection extends Component {

  render() {
    const elements = (
      <div>
        <Heading>Heading 1</Heading>
        <Heading element="h2">Heading 2</Heading>
        <Heading element="h3">Heading 3</Heading>
        <Heading element="h4">Heading 4</Heading>
        <Heading element="h5">Heading 5</Heading>
        <Heading element="h6">Heading 6</Heading>
      </div>
    )

    return (
      <Section title="Headings">
        { elements }
			</Section>
    )
  }

}

export default HeadingSection
