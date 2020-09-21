export default {
  addPet: ({ commit }, pet) => {
    commit('appendPet', pet)
  },
  addToCart: ({ commit }, item) => {
    commit('addItem', item)
  },
  updateCart: ({ commit }, updatedCart) => {
    commit('updateCart', updatedCart)
  },
  decreaseQty: ({ commit }, item) => {
    commit('decreaseCartQty', item)
  },
  increaseQty: ({ commit }, item) => {
    commit('increaseCartQty', item)
  },
  checkFromCart: ({ commit }, title) => {
    commit('checkCart', title)
  },
  updateCurrency: ({ commit }) => {
    commit('currency')
  }
}
