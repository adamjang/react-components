import React, { Component } from 'react'

// # LAYOUT
import Section from '../layout/section'
import { Button } from 'skeleton'

class ButtonSection extends Component {

  render() {
    const elements = (
      <div>
        <Button>
          Button
        </Button>
        <Button type="primary">
          Button
        </Button>
      </div>
    )

    return (
      <Section title="Buttons">
        { elements }
			</Section>
    )
  }

}

export default ButtonSection
