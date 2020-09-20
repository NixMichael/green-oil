<template>
    <div v-bind:class="{'shoppingCart':true, 'shoppingCartVisible':(viewCart)}">
      <h2>Your Cart</h2>
      <ul>
        <li v-for="item in this.$store.state.cart.items" :key="item.item">
          <div>
              <p>{{item.item}}</p>
              <p><img src="@/assets/ICONS/decrement.png"/>{{item.qty}}<img src="@/assets/ICONS/increment.png"/></p>
              <p>£{{item.price}}</p>
          </div>
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
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      viewCart: false
    }
  },
  methods: {
    ...mapActions([
      'addToCart',
      'updateCart',
      'updateCartTotal'
    ]),
    async sync () {
      const _cart = JSON.stringify(this.cart.items)
      await localStorage.setItem(this.cart.key, _cart)
    },
    init () {
      const _items = localStorage.getItem(this.$store.state.cart.key)

      this.updateCart(_items)
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

<style lang="scss" scoped>

.cartButton {
  position: absolute;
  width: 40px;
  height: 40px;
  left: -40px;
  top: 35vh;
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
    width: 85%;
    max-width: 300px;
    margin: 2rem auto 0;
    list-style: none;

    li div {
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;

      p {
        text-align: left;
        width: 19%;
        &:first-child {
          width: 63%
        }
        &:last-child {
          text-align: right;
          width: 18%;
        }
        img {
          cursor: pointer;
        }
      }
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

  .shoppingCartVisible {
    // right: 0px;
    left: calc(100vw - 400px);
    box-shadow: 0 0 45px 35px rgba(0,0,0,0.5);
  }
}
</style>
