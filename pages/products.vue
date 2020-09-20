<template>
  <div class="content">
      <p class="feature-text">
        Welcome to our shop!<br>
      </p>
      <br><br>
      <div id="covid-update">
        <h4>We're running as normal during the COVID-19 pandemic</h4>
        <br>
        Royal Mail is understandably a little slow to deliver, but otherwise all is well.
        We love local bike shops, but some still don't stock Green Oil incredibly.
      </div>
      <br><br>
      We aim to get anything ordered to you in 3-5 working days, usually 3 within the UK.
      We use eco-friendly and reclaimed packaging material for all orders.
      <br><br>
      We don't send out confirmation emails in an effort to reduce our carbon footprint. We are available on the phone and by email.
      <br><br>
      You can pay by cheque!
      If you're in the UK, add up the prices below, add £2.99 for orders less than £12, and post it to Green Oil UK Ltd, Unit S7, The Old Granary, 245 Coldharbour Lane, Brixton, London, SW9 8RR. Cheques payable to 'Green Oil UK Ltd'.
      <br><br>
      We ship World Wide. Click on the $USA button for all non-UK and non-European Union orders.

    <div id="product-search">
      <label>Product Type:
        <select>
          <option name="allProducts">All Products</option>
          <option name="lubes">Lubes</option>
          <option name="grease">Greases</option>
        </select>
      </label>
      <label>Search by keyword:
        <input type="text" />
      </label>
      <button class="search">Search</button>
    </div>
    <div class="products">
      <div v-for="product in products" :key="product.title">
        <div>
          <img :src="product.image" :alt="product.title" />
        </div>
        <div>
          <h2>
            {{ product.title }}
          </h2>
          <ul>
            <li v-for="description in product.desc" :key="description.index">{{ description }}</li>
          </ul>
          <h2>
            £{{ product.price }}
          </h2>

          <!-- <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" :value="p.checkout">
            <input type="submit" name="submit" class="addToCart" value="PP">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
          </form> -->
          <div id="cart-actions">
            <button @click="newForCart(product.title, product.price)" :name="product.title">Add To Cart</button>
            <p v-if="inCart">You have X of these in <strong>your cart</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productDetails from '@/data/product-details.js'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      products: productDetails,
      inCart: false
    }
  },
  methods: {
    ...mapActions([
      'addToCart',
      'updateCartTotal'
    ]),
    newForCart (item, price) {
      const fullContents = { item, price, qty: 1 }
      this.addToCart(fullContents)
    }
  },
  computed: {
    ...mapState([
      'cart'
    ])
  },
  head () {
    return {
      title: 'Green Oil Products',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'About Green Oil' },
        { hid: 'keywords', name: 'keywords', content: 'bicycle, bike, oil, lube, eco, environment, eco-friendly, chain' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .feature-text {
    width: 70%;
    margin: 0 auto;
    font-size: 2rem;
    color: $titles-color;
    background-image: url('../assets/IMAGES/titles-chain.png');
    background-size: 100%;
    background-position-x: center;
    background-position-y: bottom;
    background-repeat: no-repeat;
    font-family: 'Special Elite', cursive;
    padding: 1rem 2rem 2.5rem;
  }

  h4 {
    color: rgb(105, 103, 103);
    font-size: 1.3rem;
  }

  #covid-update {
    background: rgba($background, 0.4);
    border-radius: 10px;
    padding: 2rem;
    width: 70%;
    margin: 0 auto;
  }

  #product-search {
    padding: 1rem 0;
    margin: 1rem auto 0;
    background: rgba(21, 141, 41, 0.15);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      left: 0;
      border-left: 15px solid white;
      border-right: 15px solid transparent;
      border-bottom: 35px solid transparent;
      border-top: 35px solid transparent;
    }

    &::after {
      position: absolute;
      content: '';
      right: 0;
      border-right: 15px solid white;
      border-left: 15px solid transparent;
      border-bottom: 35px solid transparent;
      border-top: 35px solid transparent;
    }

    input, select {
      width: 180px;
      height: 2rem;
    }

    input {
      width: 250px;
    }

    .search {
      padding: 0.5rem 1rem;
    }
  }

  .products {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &>div {
      width: 80%;
      min-height: 400px;
      margin: 0 auto 3rem;
      padding: 2rem;
      border: 1px solid rgba(0,0,0,0.2);
      border-radius: 10px;
      box-shadow: 0 10px 10px 0 rgba(0,0,0,0.25);
      // background: rgba(255, 0, 0, 0.3);
      display: flex;
      justify-content: space-around;

      div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &>* {
          margin-bottom: 2rem;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      #cart-actions {
        min-height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        button {
          margin-bottom: 0.8rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    img {
      max-height: 300px;
      max-width: 400px;
    }

    ul li {
      list-style: none;

      &:nth-child(2n + 1) {
        color: rgb(27, 27, 27);
      }
    }

    button {
      width: 150px;
      padding: 0.7rem 0;
      color: white;
      background: $button-bg-color;
      border: none;
      border-radius: 6px;
      box-shadow: 0 5px 5px 0 rgba(37, 37, 37, 0.5);
    }
  }
</style>
