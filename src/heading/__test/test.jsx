// Base testing utils
import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

// Component to test
import Heading from '../index.jsx'

// Describe all default behaviours
describe('(component) <Heading />', () => {

  it('should render one single component', () => {
    expect(shallow(<Heading />)).to.have.length(1)
  })

})
