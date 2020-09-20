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
  }
}
