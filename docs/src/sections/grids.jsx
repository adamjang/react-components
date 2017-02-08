import React, { Component } from 'react'

// # LAYOUT
import Section from '../layout/section'
import { Grid, GridRow, GridColumn } from 'skeleton'

class GridSection extends Component {

  render() {
    const elements = (
      <div>
        <Grid>
          <GridRow>
            <GridColumn columns="one">One</GridColumn>
            <GridColumn columns="eleven">Eleven</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="two">Two</GridColumn>
            <GridColumn columns="ten">Ten</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="three">Three</GridColumn>
            <GridColumn columns="nine">Nine</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="four">Four</GridColumn>
            <GridColumn columns="eight">Eight</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="five">Five</GridColumn>
            <GridColumn columns="seven">Seven</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="six">Six</GridColumn>
            <GridColumn columns="six">Six</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="seven">Seven</GridColumn>
            <GridColumn columns="five">Five</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="eight">Eight</GridColumn>
            <GridColumn columns="four">Four</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="nine">Nine</GridColumn>
            <GridColumn columns="three">Three</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="ten">Ten</GridColumn>
            <GridColumn columns="two">Two</GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn columns="eleven">Eleven</GridColumn>
            <GridColumn columns="one">One</GridColumn>
          </GridRow>
        </Grid>
      </div>
    )

    return (
      <Section title="Grid">
        { elements }
			</Section>
    )
  }

}

export default GridSection
