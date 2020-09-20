<template>
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
              <img src="@/assets/IMAGES/Products_01.jpg" alt="img"/>
            </div>
            <div>
              <p>{{item.item}}</p>
              <p>£{{item.price}}</p>
            </div>
            <div>
              <img src="@/assets/ICONS/increment.png" @click="increaseQty(item)"/>
              <p>{{item.qty}}</p>
              <img src="@/assets/ICONS/decrement.png" @click="decreaseItemQty(item)"/>
            </div>
          <!-- </div> -->
        </li>
      </ul>
      <p id="cartTotal">Total: £{{this.$store.state.cart.total}}</p>
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_xclick">
        <input type="hidden" name="business" value="collidernix@gmail.com">
        <input type="hidden" name="item_name" value="Green Oil Order">
        <input type="hidden" name="currency_code" value="GBP">
        <input type="hidden" name="amount" :value="cart.total">
        <input type="submit" name="submit" class="addToCart" value="Checkout">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
      </form>

      <!-- <button>Checkout</button> -->
      <div :class="{'cartButton':true, 'cartButtonMove':(viewCart)}" @click="showCart()">
      <!-- <img src="@/assets/ICONS/shopping-cart-icon.png" alt="Cart"/> -->
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
      'updateCartTotal',
      'decreaseQty'
    ]),
    async sync () {
      const _cart = JSON.stringify(this.cart.items)
      await localStorage.setItem(this.cart.key, _cart)
    },
    init () {
      const _items = localStorage.getItem(this.$store.state.cart.key)
      this.updateCart(_items)
    },
    increaseQty (item) {
      this.addToCart(item)
    },
    decreaseItemQty (item) {
      this.decreaseQty(item)
    },
    showCart () {
      this.init()
      // this.cart.total = this.calcTotal()
      this.viewCart = !this.viewCart
    }
  },
  computed: {
    ...mapState([
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

.container {
  margin: 0 auto;
  width: 85vw;
  min-width: 800px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  text-align: center;
  box-shadow: 0 0 4px 0 black;
  background: $background;
  position: relative;
}

.main-content {
  width: 100%;
  padding: 1rem 3rem;
  background: white;
}

.cartButton {
  position: absolute;
  width: 40px;
  height: 40px;
  left: -40px;
  top: 25vh;
  background: rgba($background,0.7);
  background-image: url('../assets/ICONS/shopping-cart-icon.png');
  background-size: 95%;
  background-position-y: center;
  border-left: 1px solid rgba(0,0,0,0.2);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 600ms ease-in;
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
  right: 312px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgba(255,255,255,0.85);
  background-image: url('../assets/ICONS/shopping-cart-icon-open.png');
  background-size: 95%;
  background-position-y: center;
  z-index: 5;
  transition: all 600ms ease-out;

  &:hover {
    background: rgba(255,255,255,0.85);
    background-image: url('../assets/ICONS/shopping-cart-icon-open.png');
    background-size: 95%;
    background-position-y: center;
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
        justify-content: flex-start;
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
