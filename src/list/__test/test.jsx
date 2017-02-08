// Base testing utils
import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

// Component to test
import List from '../List.jsx'

// Describe all default behaviours
describe('(component) <List />', () => {

  it('should render one single component', () => {
    expect(shallow(<List />)).to.have.length(1)
  })

})
