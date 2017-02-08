import React, { Component } from 'react'

// # LAYOUT
import Section from '../layout/section'
import { List, ListItem } from 'skeleton'

class ListSection extends Component {

  render() {
    const elements = (
      <div>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2
            <List>
              <ListItem>Nested 1</ListItem>
              <ListItem>Nested 2</ListItem>
            </List>
          </ListItem>
        </List>
      </div>
    )

    return (
      <Section title="List">
        { elements }
			</Section>
    )
  }

}

export default ListSection
