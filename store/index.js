export const state = () => ({
  counter: 0,
  cart: {
    key: 'greenoil',
    items: [],
    total: 0
  }
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  appendPet: (state, payload) => {
    state.cart.extra = payload
  },
  addItem: (state, payload) => {
    let i = 0
    const exists = state.cart.items.filter((item, index) => {
      if (item.item === payload.item) {
        i = index
      }
      return item.item === payload.item
    })
    if (exists.length === 0) {
      state.cart.items.push(payload)
      localStorage.setItem(state.cart.key, JSON.stringify(state.cart.items))
    } else {
      state.cart.items[i].qty += 1
    }

    // Update cart total
    let calc = 0
    for (let i = 0; i < state.cart.items.length; i++) {
      calc += state.cart.items[i].qty * state.cart.items[i].price
    }
    calc = calc.toFixed(2)
    state.cart.total = calc
  },
  updateCart: (state, payload) => {
    if (payload) {
      state.cart.items = JSON.parse(payload)

      let calc = 0
      for (let i = 0; i < state.cart.items.length; i++) {
        calc += state.cart.items[i].qty * state.cart.items[i].price
      }

      // Update cart total
      calc = calc.toFixed(2)
      state.cart.total = calc
    } else {
      state.cart.items = []
      state.cart.total = 0
    }
  },
  cartTotal: (state, payload) => {
    state.cart.total = payload
  },
  decreaseCartQty: (state, payload) => {
    let i = 0
    state.cart.items.filter((item, index) => {
      if (item.item === payload.item) {
        i = index
      }
    })
    state.cart.items[i].qty -= 1

    if (state.cart.items[i].qty < 1) {
      state.cart.items.splice(i, 1)
    }

    localStorage.setItem(state.cart.key, JSON.stringify(state.cart.items))

    // Update cart total
    let calc = 0
    for (let i = 0; i < state.cart.items.length; i++) {
      calc += state.cart.items[i].qty * state.cart.items[i].price
    }
    calc = calc.toFixed(2)
    state.cart.total = calc
  }
}
