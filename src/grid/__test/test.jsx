// Base testing utils
import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

// Component to test
import Grid from '../Grid.jsx'

// Describe all default behaviours
describe('(component) <Grid />', () => {

  it('should render one single component', () => {
    expect(shallow(<Grid />)).to.have.length(1)
  })

})
