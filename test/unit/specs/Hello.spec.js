import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })

  it('should use inject once', () => {
    // inject-loader gives us a factory that can create instances
    // of the module with different injected dependencies.
    // make sure to use the require() syntax here.
    // for webpack loader string syntax, see:
    // - https://webpack.github.io/docs/loaders.html
    const inject = require('!!vue?inject!../../../src/components/Hello.vue')
    // create an instance of the component module
    const ComponentWithMock = inject({
      '../store/store.js': {
        'state': {
          'foo': 'baz'
        }
      }
    })

    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(ComponentWithMock)
    })
    expect(vm.$el.querySelector('#unitTest').textContent)
      .to.equal('baz')
  })

  it('should use inject twice', () => {
    // inject-loader gives us a factory that can create instances
    // of the module with different injected dependencies.
    // make sure to use the require() syntax here.
    // for webpack loader string syntax, see:
    // - https://webpack.github.io/docs/loaders.html
    const inject = require('!!vue?inject!../../../src/components/Hello.vue')
    // create an instance of the component module
    const ComponentWithMock = inject({
      '../store/store.js': {
        'state': {
          'foo': 'foo'
        }
      }
    })

    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(ComponentWithMock)
    })
    expect(vm.$el.querySelector('#unitTest').textContent)
      .to.equal('foo')
  })
})
