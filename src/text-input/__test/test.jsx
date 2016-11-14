// Base testing utils
import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

// Component to test
import TextInput from 'components/form/text-input'

// Describe all default behaviours
describe('(component) <TextInput />', () => {
  it('should render one single component', () => {
    expect(shallow(<TextInput />)).to.have.length(1)
  })
  
  it('should countain valid defaults', () => {
    const textInput = mount(<TextInput />)
    expect(textInput.props()).to.have.property('defaultValue', '')
  })

  it('should default to class name .jbs-input', () => {
    expect(shallow(<TextInput />).find('.jbs-input')).to.have.length(1)
  })

  //Dummy Data
  
  
  // TODO: Will need to test input value 
  // Test localization
  // Potentially test 
  // SQL injections?
  // Charecter encoding
  // type validation
  // min and max string validation
  // escape charecters
  
  
})
