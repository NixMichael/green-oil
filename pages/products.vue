<template>
  <div class="content">
      <div class="feature-text">
        Welcome to our shop!
      </div>
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
      <div>
        <div>
        <label>Product Type: </label>
          <select>
            <option name="allProducts">All Products</option>
            <option name="lubes">Lubes</option>
            <option name="grease">Greases</option>
          </select>
        </div>
        <div>
        <label>Keyword: </label>
          <input type="text" />
        </div>
      </div>
      <button class="search">Search</button>
    </div>
<!-- PRODUCT CARDS -->
    <div class="products">
      <div class="card" v-for="product in products" :key="product.title">

          <h2 class="title">
            {{ product.title }}
          </h2>

          <div class="main-card-contents">
            <div class="img">
              <img :src="product.image" :alt="product.title" />
            </div>

            <div class="desc">
              <div class="details">
                <ul>
                  <li v-for="description in product.desc" :key="description.index">{{ description }}</li>
                </ul>
              </div>
              <div class="price">
                <h2>
                  {{ $store.state.currency[$store.state.currencySelect] }}{{ (product.price * $store.state.currencyConversion).toFixed(2) }}
                </h2>
              </div>
            </div>
          </div>
          <div id="cart-actions">
            <button @click="newForCart(product.title, product.price, product.image, product.id)" :name="product.title">Add To Cart</button>
          </div>
      </div>
    </div>
<!-- PRODUCT CARDS -->
  </div>
</template>

<script>
import productDetails from '@/data/product-details.js'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      products: productDetails,
      currencySymbol: this.$store.state.currency
      // amount: product.price * $store.state.currencyConversion
    }
  },
  methods: {
    ...mapActions([
      'addToCart',
      'updateCartTotal',
      'checkFromCart'
    ]),
    newForCart (item, price, image, id) {
      const fullContents = { item, price, image, qty: 1, id }
      this.addToCart(fullContents)
    }
  },
  computed: {
    ...mapState([
      'currency',
      'cart',
      'counter'
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

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding: 0 2rem;
    margin: 1rem auto 0;
    min-width: 100%;
    background: rgba(21, 141, 41, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div:first-child {
      max-width: 80%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      div {
        width: 50%;
        min-width: 300px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        label {
          margin-right: 10px;
        }
      }
    }

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
      min-width: 180px;
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
    max-width: 800px;

    .card {
      width: 45%;
      min-height: 400px;
      margin: 0 auto 3rem;
      padding: 1rem 2rem;
      border: 1px solid rgba(0,0,0,0.2);
      border-radius: 10px;
      box-shadow: 0 10px 10px 0 rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        width: 100%;
        margin-bottom: 1rem;
      }

      .main-card-contents {
        width: 100%;
        max-height: 85%;
        display: flex;
      }

      .img {
        display: flex;
        justify-content: flex-start;
        align-self: flex-start;
        flex-basis: 55%;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .desc {
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        .details {
          ul {
            list-style: none;

            li:nth-child(2n) {
              color: rgb(20,20,20);
            }
          }
        }
        .price {
          height: 2rem;
          margin: 1rem 0;
        }
      }

    button {
      width: 150px;
      margin-bottom: 1rem;
      padding: 0.7rem 0;
      color: white;
      background: $button-bg-color;
      border: none;
      border-radius: 6px;
      box-shadow: 0 5px 5px 0 rgba(37, 37, 37, 0.5);
      flex-basis: 15%;
    }
    }

    // &>div {
    //   max-width: 85%;
    //   min-height: 400px;
    //   margin: 0 auto 3rem;
    //   padding: 1rem 2rem;
    //   border: 1px solid rgba(0,0,0,0.2);
    //   border-radius: 10px;
    //   box-shadow: 0 10px 10px 0 rgba(0,0,0,0.25);
    //   display: grid;
    //   grid-template-areas: "title title" "img desc" "img desc";

    //   .title {
    //     grid-area: title;
    //   }

    //   .img {
    //     grid-area: img;
    //     margin-top: 2rem;
    //     margin-right: 1rem;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-start;
    //   }

    //   img {
    //     max-height: 300px;
    //     max-width: 100%;
    //   }

    //   .desc {
    //     max-width: 100%;
    //     grid-area: desc;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-around;

    //     div {
    //       margin: 1rem 0;
    //     }
    //   }
    // }

    // ul {
    //   margin-top: 2rem;
    //   li {
    //     list-style: none;

    //     &:nth-child(2n + 1) {
    //       color: rgb(27, 27, 27);
    //     }
    //   }
    // }

    // button {
    //   width: 150px;
    //   padding: 0.7rem 0;
    //   color: white;
    //   background: $button-bg-color;
    //   border: none;
    //   border-radius: 6px;
    //   box-shadow: 0 5px 5px 0 rgba(37, 37, 37, 0.5);
    // }
  }

@media screen and (max-width: 1000px) {

    .card {
      min-width: 85%;

      .main-card-contents {
        width: 100%;
        max-height: 85%;
        display: flex;
      }

      .img {
        display: flex;
        justify-content: flex-start;
        align-self: flex-start;
        flex-basis: 55%;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .desc {
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        .details {
          ul {
            list-style: none;

            li:nth-child(2n) {
              color: rgb(20,20,20);
            }
          }
        }
        .price {
          height: 2rem;
          margin: 1rem 0;
        }
      }
    }
}

</style>
