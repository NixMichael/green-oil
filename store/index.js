export const state = () => ({
  currencies: ['GBP', 'EUR', 'USD'],
  currency: ['£', '€', '$'],
  currencySelect: 0,
  currencyConversion: 1,
  // currencyIcons: ['../assets/ICONS/GBP.jpeg'],
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
    } else {
      state.cart.items[i].qty += 1
    }

    localStorage.setItem(state.cart.key, JSON.stringify(state.cart.items))
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
  increaseCartQty: (state, payload) => {
    let i = 0
    state.cart.items.filter((item, index) => {
      if (item.item === payload.item) {
        i = index
      }
    })
    state.cart.items[i].qty += 1

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
  },
  currency: (state) => {
    let current = state.currencySelect
    if (current < 2) {
      current++
    } else {
      current = 0
    }
    state.currencySelect = current
    console.log(state.currencySelect)

    switch (state.currencySelect) {
      case 0:
        state.currencyConversion = 1
        break
      case 1:
        state.currencyConversion = 1.5
        break
      case 2:
        state.currencyConversion = 2
        break
      default:
        state.currencyConversion = 1
    }
    console.log(state.currencyConversion)
  }
}
