import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import sinon from 'sinon'

import App from '../components/App'
import SearchGifs from '../components/SearchGifs'

describe('App | Unit Tests', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('renders a title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it('renders a <SearchGifs /> components', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(SearchGifs)).to.have.length(1)
  })
})
