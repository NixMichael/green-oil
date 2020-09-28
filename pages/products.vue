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

    <!-- <div id="product-search">
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
    </div> -->
<!-- PRODUCT CARDS -->
    <div class="products">
      <div class="card" v-for="product in products" :key="product.title">

          <div class="title">
            {{ product.title }}
          </div>

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
                <h1>
                  {{ $store.state.currency[$store.state.currencySelect] }}{{ (product.price * $store.state.currencyConversion).toFixed(2) }}
                </h1>
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

// @media screen and (max-width: 450px) {
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
    margin: 0.5rem auto;
  }

  #product-search {
    padding: 1rem 2rem;
    margin: 1rem auto 0;
    background: rgba(21, 141, 41, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div {
      max-width: 80%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        label {
          align-self: center;
          margin-right: 10px;
        }

        input {
          max-width: 80%;
        }
      }
    }

    &::before, &::after {
      position: absolute;
      content: '';
      border-bottom: 50px solid transparent;
      border-top: 50px solid transparent;
    }

    &::before {
      left: 0;
      border-left: 15px solid white;
      border-right: 15px solid transparent;
    }

    &::after {
      right: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid white;
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

    button {
      margin: 1rem 0;
    }
  }

  .products {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;

  .card {
    margin: 0 0.5rem 3rem;
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 3rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .main-card-contents {
    height: 85%;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    .img {
      width: 50%;
      align-self: center;
      // overflow: hidden;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .desc {
      align-self: center;

      .details {
        align-items: center;
        ul li {
          list-style: none;
          font-size: 0.6rem;
        }
      }
      .price {
        font-size: 0.7rem;
      }
    }
  }

  button {
    width: 100px;
    max-width: 85%;
    // margin-bottom: 1rem;
    padding: 0.7rem 0;
    color: white;
    background: $button-bg-color;
    border: none;
    border-radius: 6px;
    box-shadow: 0 5px 5px 0 rgba(37, 37, 37, 0.5);
    flex-basis: 15%;
  }

@media screen and (min-width: 450px) {
    .card {
      width: 180px;
      margin: 0 0.5rem 3rem;
      padding: 1rem;
      border: 1px solid rgba(0,0,0,0.2);
      border-radius: 10px;
      box-shadow: 0 10px 10px 0 rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .wide-image {
        flex-direction: column;
      }

      .main-card-contents {
        min-width: 100%;
        height: 85%;
        display: flex;
        flex-direction: column;
        // justify-content: space-around;

        .img {
          width: 100%;
          max-height: 250px;
          align-self: flex-start;
          img {
            max-width: 100%;
            max-height: 200px;
          }
        }

        .desc {
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          height: 100%;
          .details {
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            ul {
              margin: 1rem 0;
              li {
                list-style: none;
                font-size: 0.8rem;
                &:nth-child(2n) {
                  color: rgb(20,20,20);
                }
              }
            }
          }
          .price {
            font-size: 0.7rem;
            margin: 1rem 0;
          }
        }
      }
      button {
        width: 150px;
      }
    }
  }

//   #product-search {
//     max-width: 95%;
//     margin: 1rem auto 0;
//     padding: 1rem 1rem 0 1rem;
//   //   background: rgba(21, 141, 41, 0.15);
//     display: flex;
//     flex-direction: column;
//   //   justify-content: center;
//   //   align-items: center;
//   //   position: relative;

//     &::before, &::after {
//       border: none;
//     }

//     div {
//       flex-direction: column;
//       div {
//         input {
//           width: 90%;
//         }
//       }
//     }
//   }
// }
}
</style>
