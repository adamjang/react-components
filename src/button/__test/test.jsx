// Base testing utils
import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

// Component to test
import Button from '../index.jsx'

// Describe all default behaviours
describe('(component) <Button />', () => {

  it('should render one single component', () => {
    expect(shallow(<Button />)).to.have.length(1)
  })

})
