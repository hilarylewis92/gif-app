import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import sinon from 'sinon'

import SearchGifs from '../components/SearchGifs'

describe('SearchGifs | Unit Tests', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<SearchGifs />)
    assert.equal(wrapper.type(), 'div')
  })

  it('renders an input field', () => {
    const wrapper = shallow(<SearchGifs />)
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('has constructor that sets state of gifs to an empty array', () => {
    const wrapper = shallow(<SearchGifs />)
    expect(wrapper.state('gifs')).deep.equal([])
  })
})


describe('SearchGifs | Feature Tests', () => {
  xit('simulates change in input field', done => {
    const wrapper = mount(<SearchGifs />)
    const input = wrapper.find('input')

    input.simulate('change', {target: { value: 'Hello' }})
    expect((input).value).to.equal('Hello')
  })

  xit('simulates a keyup event', () => {
    const onKeyDown = sinon.spy()
    const wrapper = mount(<SearchGifs defaultValue="Hello"/>)
    const input = wrapper.find('input')

    input.simulate('focus')
    input.simulate('change', { target: { value: 'Changed' } })
    input.simulate('keyDown', {keyCode: 13})
    expect(onKeyDown.called).to.be.true
  })
})
