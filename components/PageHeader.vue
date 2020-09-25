<template>
  <div class="nav-container">
    <div id="twitter-cta">
      <div id="contact-number">
        <img src="../assets/ICONS/phone-symbol.png" alt="call us" /><p>020 7274 8725</p>
      </div>
      <p>Tweet your favourite bike shop to stock Green Oil!</p>
      <div id="social-icons">
        <a target="_blank" href="https://www.twitter.com/greenoil"><img src="../assets/ICONS/twitter.png" alt="Twitter" /></a>
        <a target="_blank" href="https://www.instagram.com/greenoiluk"><img src="../assets/ICONS/instagram.png" alt="Instagram" /></a>
        <a target="_blank" href="https://www.facebook.com/bicycleoil"><img src="../assets/ICONS/facebook.png" alt="Facebook" /></a>
      </div>
    </div>
    <div id="header-image">
    </div>
    <div class="navigation">
      <div>
        <nuxt-link exact to="/">
          About Green Oil
        </nuxt-link>
        <nuxt-link exact to="/products">
          Our Products
        </nuxt-link>
        <nuxt-link exact to="faq">
          FAQ
        </nuxt-link>
        <nuxt-link exact to="/trade">
          Stock Green Oil
        </nuxt-link>
        <nuxt-link exact to="/blog">
          Blog
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

  .nav-container {
    background: $background;
  }

  #twitter-cta {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    color: white;
    background: $banner-bg;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #contact-number {
      width: 120px;
      margin-left: 1rem;
      display: flex;
      align-items: center;
    }

    &:nth-child(2) {
      width: auto;
    }

    #social-icons {
      width: 120px;
      margin-right: 1rem;
      display: flex;
      justify-content: space-between;
      a img {
        height: 2rem;
      }
    }
  }

  #header-image {
    border-top: 1px solid white;
    height: 250px;
    background-image: url('../assets/IMAGES/Banner-Team.png');
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;

    img {
      width: 100%;
    }
  }

  .navigation {
    width: 100%;
    background: rgb(57, 61, 58);
    padding: 0.5rem 0;
    border-top: 1px solid white;

    div {
      max-width: 760px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-family: 'Fira Sans Extra Condensed', sans-serif;
    }
  }

  .navigation a {
    color: white;
    padding: 0 2rem;
    font-size: 1.2rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    outline: 7px solid rgba(0, 0, 0, 0);

    &:hover {
      background: rgba(0, 0, 0, 0.4);
      outline: 7px solid rgba(0, 0, 0, 0.4);
      transition: all 600ms ease;
    }
  }

</style>
