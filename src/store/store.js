const store = {}

store.state = {}
store.mutations = {}

store.state.foo = 'bar'

store.mutations.updateFoo = function (newFoo) {
  store.state.foo = newFoo
}

export default store
