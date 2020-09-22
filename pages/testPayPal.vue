<template>
  <div>
    <div v-if="!paidFor">
      <h1>Buy this Lamp - ${{ product.price }} OBO</h1>

      <p>{{ product.description }}</p>

    </div>

    <div v-if="paidFor">
      <h1>Noice, you bought a beautiful lamp!</h1>
    </div>
    <button @click="makePayment()">PAY</button>
    <div ref='paypal'></div>
  </div>
</template>

<script>
// import image from "../assets/lamp.png"
export default {

  data: () => {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 3.33,
        description: 'leg lamp from that one movie',
        img: './assets/lamp.jpg'
      }
    }
  },
  methods: {
    makePayment () {
      const script = document.createElement('script')
      script.src = 'https://www.paypal.com/sdk/js?client-id=AZ1OU1dqwYBJ_gHhYS7KkgJA81KXyFWqU1EEr0Y7g3hv8F3CA23vN3C4XTJ3eQlzQ37_SYVqYzbipUOR&currency=GBP'
      script.addEventListener('load', this.setLoaded)
      document.body.appendChild(script)
    },
    setLoaded () {
      this.loaded = true
      alert('loaded now')
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: 'GBP',
                    value: this.product.price
                  }
                }
              ]
            })
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture()
            this.paidFor = true
            console.log(`Complete! --- ${order}`)
          },
          onError: (err) => {
            console.log(err)
          }
        })
        .render(this.$refs.paypal)
    }
  }
}
</script>
