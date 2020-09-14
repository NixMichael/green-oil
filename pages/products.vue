<template>
  <div class="content">
    <p>
      <p class="feature-text">
        Welcome to our shop!<br>
      </p>
      <br><br>
      <div id="covid-update">
        <h4>We're running as normal during COVID-19</h4>
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
    </p>
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
      <div v-for="p in products" :key="p">
        <div>
          <img :src="p.image" :alt="p.title" />
        </div>
        <div>
          <h2>
            {{ p.title }}
          </h2>
          <ul>
            <li v-for="d in p.desc" :key="d.index">{{ d }}</li>
          </ul>
          <h2>
            {{ p.price }}
          </h2>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          title: 'Green Oil Wet Chain Lube',
          desc: [
            'Prevents rust',
            'Reduces wear',
            'All conditions lube',
            '125 + Miles between applications',
            'PTFE free and fully biodegradable'
          ],
          image: require('../assets/IMAGES/products/Wet_Chain_Lube-Bottle-Green_Oil.png'),
          price: '£6.99'
        },
        {
          title: 'Green Oil Dry Chain Wax',
          desc: [
            'Dry conditions lube',
            'Utilizes natural wax',
            'Great for commuters',
            'No trouser leg stains',
            'PTFE and petrochemical free'
          ],
          image: require('../assets/IMAGES/products/Dry_Chain_Wax-bottle-Green_Oil.png'),
          price: '£14.99'
        },
        {
          title: 'Seeds',
          desc: [
            'Either Rocket Salad or Basil',
            'Hand packed and grown in the UK',
            '100% recycled paper packet',
            'Also part of our Eco Rider Deluxe set'
          ],
          image: require('../assets/IMAGES/products/Rocket_Salad_Basil_Seeds.gif'),
          price: '£££'
        },
        {
          title: 'Bike Armour',
          desc: [
            'Protects frame from cable rub',
            'Real metal blend',
            'Covers carbon fibre chips',
            'Covers scratches and more',
            'looks great on any bike'
          ],
          image: require('../assets/IMAGES/products/Bike-Armour.gif'),
          price: '£4.99'
        },
        {
          title: 'Green Oil On Tour',
          desc: [
            'Protects frame from cable rub',
            'Real metal blend',
            'Covers carbon fibre chips',
            'Covers scratches and more',
            'Looks great on any bike'
          ],
          image: require('../assets/IMAGES/products/On_Tour-Bottle-Green-Oil.gif'),
          price: '£2.39'
        },
        {
          title: 'Green Oil EcoSpray Lube',
          desc: [
            'Displaces water',
            'Lubricates',
            'Protects from moisture',
            'QUick and easy to use',
            'Fluid content 100% biodegradable',
            'Comes with straw for hard to reach areas'
          ],
          image: require('../assets/IMAGES/products/EcoSpray_Lube-Bottle-Green_Oil.gif'),
          price: '£7.99'
        },
        {
          title: 'Ecogrease',
          desc: [
            'Ideal for pivots etc',
            'Thick Formula',
            'PTFE and petrochemical free',
            'No fits most grease guns!'
          ],
          image: require('../assets/IMAGES/products/Ecogrease-Bottle-Green-Oil.gif'),
          price: '£8.99'
        },
        {
          title: 'Agent Apple Degreaser (300ml)',
          desc: [
            'From COVID-19 to chain grime - Agent Apple destroys it',
            'So strong it can be re-used 3 times - pour back into the bottle!',
            'Make your cassette or chain look new again',
            'Utilizes fermented apple extract, natural alcohol, and orange extracts'
          ],
          image: require('../assets/IMAGES/products/Agent-Apple-Extreme.gif'),
          price: '£14.99'
        },
        {
          title: 'Green Clean Bike Cleaner',
          desc: [
            'Powerful bike cleaner',
            'Garden safe',
            'No petrochemicals',
            'Pistol mode!',
            'The world\'s greenest bike cleaner',
            'Nanotech free'
          ],
          image: require('../assets/IMAGES/products/Green-Clean-bike-cleaner.gif'),
          price: '£9.99'
        },
        {
          title: 'Clean Chain Degreaser Jelly (100ml)',
          desc: [
            'Degreasing gel',
            'Easy to apply to chain',
            'Makes 1 litre of cleaner',
            'Plant based',
            'Sticks to your chain, scrub it off to clean!'
          ],
          image: require('../assets/IMAGES/products/Clean-Chain-Degreaser.gif'),
          price: '£5.99'
        },
        {
          title: 'Ultra Chain Brush',
          desc: [
            'Built to last, not wear out fast',
            'British made',
            'Due to COVID-19 and trees taking time to grow, an ideal replacement for our FSC wooden brush'
          ],
          image: require('../assets/IMAGES/products/Ultra-Chain-Brush.gif'),
          price: '£14.99'
        },
        {
          title: 'EcoRag',
          desc: [
            'Carbon fibre safe',
            'SOft and durable',
            'Made from upcycled fabric',
            'Can be washed in a washing machine!',
            'Helps stop fabric fibres going to landfill',
            'Quality thick fabric'
          ],
          image: require('../assets/IMAGES/products/Bike-Armour.gif'),
          price: '£4.99'
        },
        {
          title: 'Green Oil Bamboo Detail Brush',
          desc: [
            'Ideal for fine cleaning parts in degreaser',
            'Bioplastic nylon bristles',
            'Sustainably sourced bamboo handle',
            'Great for hard to reach places'
          ],
          image: require('../assets/IMAGES/products/Bamboo_Brush.gif'),
          price: '£7.99'
        },
        {
          title: 'Green Oil Fruit Box Rack',
          desc: [
            'Made from upcycled wood',
            'Hand built in the United Kingdom',
            'Helps Greenwich Mencap workers in an enjoyable wood workshop',
            'Great for your Green Oil, small tools, bike parts and more',
            'Does not include the products shown, you get the wood rack only for this great price!',
            'Measures approximately 24cm x 24cm x 5.5cm'
          ],
          image: require('../assets/IMAGES/products/FruitBox.gif'),
          price: '£21.99'
        },
        {
          title: 'Eco Rider Deluxe Box (empty)',
          desc: [
            'Waterproof to depth of 1 metre',
            'Ideal for safely storing Green Oil products, tools and more',
            'Great for yoru garage, bike shed shelf or car boot',
            'Ideal for storing emergency supplies or dry clothing',
            'Made in Great Britain',
            'Measures approximately 35cm x 15cm x 14cm'
          ],
          image: require('../assets/IMAGES/products/Eco_Rider_Deluxe_Box.gif'),
          price: '£4.99'
        },
        {
          title: 'Eco Rider Deluxe Set',
          desc: [
            'Green Oil Wet Chain Lube',
            '2x Bike Armour!',
            'Ecogrease',
            'Green Clean',
            'Clean Chain Degreaser Jelly',
            'EcoRag',
            'Tub for water or storage of our products',
            'Includes the Green Oil Ultra Chain Brush',
            'Perhaps the best cyclist gift you\'ll ever buy',
            'Also includes a pack of seeds!'
          ],
          image: require('../assets/IMAGES/products/Eco-Rider-Deluxe-Set.gif'),
          price: '£64.99'
        }
      ]
    }
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
    // border-top: 1px solid rgba($normal-font, 0.5);
    // border-bottom: 1px solid rgba($normal-font, 0.5);
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
    }

    img {
      max-height: 300px;
      max-width: 350px;
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
