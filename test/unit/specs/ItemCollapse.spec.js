/* eslint-disable no-undef,no-unused-expressions */

import { mount } from 'vue-test-utils'
import { ItemCollapse } from 'vimo'

let wrapper = null
let options = {
  propsData: {
    title: 'This is a title',
    mode: 'md',
    color: 'danger'
  },
  slots: {
    'item-right': '<span>item-right</span>',
    'item-left': '<span>item-left</span>',
    'item-title': '<span>item-title</span>',
    default: '<span>Test</span>'
  }
}

describe('ItemCollapse', function () {
  it('@base: renders the correct markup', function () {
    wrapper = mount(ItemCollapse, options)
    const result = `<div class="item-collapse collapse-md"><div class="ion-item item-block item-md item-md-danger"><span item-left="">item-left</span> <div class="item-inner"><div class="input-wrapper">This is a title</div> <div class="item-arrow"></div> <span item-right="">item-right</span></div></div> <div class="item-collapse-inner" style="display: none;"><span>Test</span></div></div>`
    expect(wrapper.html()).to.equal(result)
  })

  it('@base: component must have a name', function () {
    wrapper = mount(ItemCollapse, options)
    expect(wrapper.name()).to.equal('ItemCollapse')
  })

  it('@base: have the right className', function () {
    wrapper = mount(ItemCollapse, options)
    expect(wrapper.hasClass('collapse-md')).to.be.ok
  })
})
