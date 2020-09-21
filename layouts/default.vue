<template>
  <div class="wrap">
    <div class="container">
      <PageHeader />
      <div class="main-content">
        <Nuxt />
      </div>
      <Footer />
      <div v-bind:class="{'shoppingCart':true, 'shoppingCartVisible':(viewCart)}">
        <h2>Your Cart</h2>
        <ul>
          <li v-for="item in this.$store.state.cart.items" :key="item.item">
            <!-- <div> -->
              <div>
                <img :src="item.image" :alt="item.item"/>
              </div>
              <div>
                <p>{{item.item}}</p>
                <p>{{ $store.state.currency[$store.state.currencySelect] }}{{ (item.price * $store.state.currencyConversion).toFixed(2) }}</p>
              </div>
              <div>
                <img src="@/assets/ICONS/increment.png" @click="increaseItemQty(item)"/>
                <p>{{item.qty}}</p>
                <img src="@/assets/ICONS/decrement.png" @click="decreaseItemQty(item)"/>
              </div>
            <!-- </div> -->
          </li>
        </ul>
        <p id="cartTotal">Total: {{ $store.state.currency[$store.state.currencySelect] }}{{(this.$store.state.cart.total * $store.state.currencyConversion).toFixed(2)}}</p>
        <!-- SMART BUTTON -->
        <!-- <div id="smart-button-container">
          <div style="text-align: center;">
            <div id="paypal-button-container"></div>
          </div>
        </div> -->
        <!-- SMART BUTTON END -->
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_xclick">
          <input type="hidden" name="business" value="collidernix@gmail.com">
          <input type="hidden" name="item_name" value="Green Oil Order">
          <input type="hidden" name="currency_code" :value="this.$store.state.currencies[this.$store.state.currencySelect]">
          <input type="hidden" name="amount" :value="cart.total">
          <input type="submit" name="submit" class="addToCart" value="Checkout">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
        </form>
      </div>
    </div>
    <div>
      <div :class="{'cartButton':true, 'cartButtonMove':(viewCart)}" @click="showCart()"></div>
      <div class="cartItems" v-if="this.$store.state.cart.items.length > 0 && !viewCart"><span>{{this.cartQty()}}</span></div>
      <div class="currencyButton" @click="changeCurrency()">
        <div>
          <!-- <img :src="require(`@/assets/ICONS/${this.$store.state.currencies[this.$store.state.currencySelect]}.jpeg`)" /> -->
          {{ $store.state.currency[$store.state.currencySelect] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    PageHeader,
    Footer
  },
  data () {
    return {
      viewCart: false
    }
  },
  methods: {
    ...mapActions([
      'addToCart',
      'updateCart',
      'increaseQty',
      'decreaseQty',
      'updateCurrency'
    ]),
    changeCurrency () {
      this.updateCurrency()
      console.log(this.$store.state.currencies[this.$store.state.currencySelect])
    },
    async sync () {
      const _cart = JSON.stringify(this.cart.items)
      await localStorage.setItem(this.cart.key, _cart)
    },
    init () {
      const _items = localStorage.getItem(this.$store.state.cart.key)
      this.updateCart(_items)
    },
    increaseItemQty (item) {
      this.increaseQty(item)
    },
    decreaseItemQty (item) {
      this.decreaseQty(item)
    },
    showCart () {
      this.init()
      this.viewCart = !this.viewCart
    },
    cartQty () {
      let total = 0
      for (let i = 0; i < this.$store.state.cart.items.length; i++) {
        total += this.$store.state.cart.items[i].qty
      }
      return total
    }
  },
  computed: {
    ...mapState([
      // 'currencyIcons',
      'currency',
      'cart'
    ])
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@500&family=Special+Elite&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Fira Sans Extra Condensed', sans-serif;
  color: $normal-font;
}

.wrap {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.container {
  margin-left: 40px;
  width: 85%;
  min-width: 800px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  text-align: center;
  box-shadow: 0 0 4px 0 black;
  background: $background;
}

.main-content {
  width: 100%;
  padding: 1rem 3rem;
  background: white;
}

.cartButton {
  position: sticky;
  width: 40px;
  height: 40px;
  // right: -40px;
  top: 30vh;
  background: rgba($background,0.7);
  background-image: url('../assets/ICONS/shopping-cart-icon.png');
  background-size: 95%;
  background-position-y: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 600ms ease-in-out;
  cursor: pointer;

  img {
    width: 90%;
    margin-top: 2px;
  }

  &:hover {
    background: rgba($background, 0.3);
    background-image: url('../assets/ICONS/shopping-cart-icon.png');
    background-size: 95%;
    background-position-y: center;
  }
}

.cartButtonMove {
  top: 1.5rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: none;
  background-image: url('../assets/ICONS/shopping-cart-icon-open.png');
  background-size: 95%;
  background-position-y: center;
  z-index: 21;
  transition: all 1200ms ease-out;

  &:hover {
    background: none;
    background-image: url('../assets/ICONS/shopping-cart-icon-open.png');
    background-size: 95%;
    background-position-y: center;
  }
}

.cartItems {
  position: sticky;
  width: 26px;
  height: 26px;
  top: calc(29vh - 12px);
  margin-left: 22px;
  color: white;
  font-size: 1.3rem;
  border-radius: 50%;
  background: rgba($background,0.8);
  z-index: -5;
  display: flex;
  justify-content: center;
}

.currencyButton {
  position: sticky;
  width: 40px;
  height: 40px;
  top: 36vh;
  // margin-left: 1px;
  // color: white;
  font-size: 1.3rem;
  // background: rgba($titles-color,0.7);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 600ms ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  div img {
    max-width: 75%;
    margin: 0 auto;
  }
}

.shoppingCart {
  position: fixed;
  left: 100%;
  top: 0px;
  bottom: 0px;
  width: 400px;
  background: rgba(233, 233, 233, 0.95);
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 600ms ease-in-out;
  padding: 2rem;
  z-index: 20;

  ul {
    width: 100%;
    max-width: 300px;
    margin: 2rem auto 0;
    list-style: none;

    li {
      padding: 0.5rem;
      &:nth-child(2n + 1) {
        background: rgba(255,255,255,0.4);
      }
      &:nth-child(2n) {
        background: rgba(0,0,0,0.03);
      }
    }

    li {
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;

      div:first-child {
        width: 20%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        img {
          margin-top: 5px;
          max-width: 85%;
          max-height: 85%;
        }
      }

      div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 70%;

        p {
          text-align: left;
          font-size: 1.1rem;

          &:last-child {
            font-size: 1rem;
          }
        }
      }

      div:last-child {
        width: 10%;
        font-size: 1.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          max-width: 80%;
        }

        p {
          height: 20px;
          width: 20px;
          font-size: 0.8rem;
          padding-top: 2px;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
        }
      }

      // p {
      //   text-align: left;
      //   width: 19%;
      //   &:first-child {
      //     width: 63%
      //   }
      //   &:last-child {
      //     text-align: right;
      //     width: 18%;
      //   }
        img {
          cursor: pointer;
        }
      // }
    }
  }

#cartTotal {
    width: 85%;
    font-size: 1.5rem;
    text-align: right;
  }

  .addToCart {
    margin-top: 3rem;
    padding: 0.5rem 1rem;
    color: white;
    background: $button-bg-color;
    border: none;
    border-radius: 6px;
    box-shadow: 0 5px 5px 0 rgba(37, 37, 37, 0.5);
    cursor: pointer;
  }

  // button {
  //   border: none;
  //   width: 50%;
  //   margin: 3rem 0 0;
  //   padding: 0.5rem 1rem;
  //   color: white;
  //   background: $background;
  //   border-radius: 10px;
  //   box-shadow: 0 5px 10px 0 rgba(0,0,0,0.7);
  //   cursor: pointer;
  // }
}

.shoppingCartVisible {
  // right: 0px;
  left: calc(100vw - 400px);
  box-shadow: 0 0 45px 35px rgba(0,0,0,0.5);
}

// a {
//   color: white;
//   &:visited, &:hover, &:focus {
//     color:white;
//   }
// }

</style>
