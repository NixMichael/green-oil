<template>
  <div class="nav-container">
    <div id="top-banner">
    <div id="twitter-cta">
      <div id="contact-number">
        <img src="../assets/ICONS/phone-symbol.png" alt="call us" /><p>020 7274 8725</p>
      </div>
      <div id="social-icons">
        <a target="_blank" href="https://www.twitter.com/greenoil"><img src="../assets/ICONS/twitter.png" alt="Twitter" /></a>
        <a target="_blank" href="https://www.instagram.com/greenoiluk"><img src="../assets/ICONS/instagram.png" alt="Instagram" /></a>
        <a target="_blank" href="https://www.facebook.com/bicycleoil"><img src="../assets/ICONS/facebook.png" alt="Facebook" /></a>
      </div>
    </div>
    </div>
    <div id="header-image">
    </div>
    <div class="navigation">
      <input type="checkbox" id="toggler"/>
      <div class="menu-wrapper">
        <div class="burger-menu"></div>
      </div>
      <div @click="hideMenu()" id="menu-items">
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
  methods: {
    hideMenu () {
      const menu = document.getElementById('toggler')
      menu.checked = false
      console.log('blah')
    }
  }
}
</script>

<style scoped lang="scss">

  .nav-container {
    background: $background;
  }

  #toggler {
    display: none;
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
    min-height: 200px;
    background-image: url('../assets/IMAGES/Logo.png');
    background-position-x: left;
    background-position-y: top;
    background-size: contain;
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

    a {
      color: white;
      background: rgb(57, 61, 58);
      outline: 1px solid rgb(57, 61, 58);
      padding: 0 2rem;
      font-size: 1.2rem;
      text-decoration: none;
      display: flex;
      justify-content: center;

      &:hover {
        background: rgba(0, 0, 0, 0.4);
        outline: 7px solid rgba(0, 0, 0, 0.4);
        transition: all 600ms ease;
      }

    }

    .nuxt-link-active, .nuxt-link-exact-active {
      background: rgba(0,0,0,0.6);
      outline: 7px solid rgba(0,0,0,0.6);
    }
  }

@media screen and (max-width: 800px) {
  #social-icons {
    opacity: 0;
  }

  #header-image {
    min-height: 140px;
  }

  .navigation {
    padding: 0;
    // padding-bottom: 2px;
    // background: $background;

    .nuxt-link-active, .nuxt-link-exact-active {
      text-decoration: underline;
    }

    #toggler {
      display: block;
      z-index: 25;
      opacity: 0;
      position: absolute;
      top: 10px;
      right: 25px;
      width: 35px;
      height: 40px;
      &:checked {
        &~#menu-items {
          display: flex;
        }
        &~.menu-wrapper {
          .burger-menu {
            transform: rotate(45deg);
            &::before {
              transform: rotate(85deg);
            }
          }
        }
      }
    }

    #menu-items {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.95);
      align-items: center;
      justify-content: center;
      z-index: 20;
      flex-direction: column;

      a {
        font-size: 2rem;
        margin: 1rem;
        background: none;
        outline: none;

      }
    }

    .menu-wrapper {
      z-index: 24;
      position: absolute;
      top: 10px;
      right: 25px;
      width: 35px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .burger-menu {
        width: 100%;
        height: 5px;
        background: white;
        transition: all 600ms ease-in-out;
        &::before, &::after {
          content: '';
          width: 100%;
          height: 5px;
          background: white;
          position: absolute;
          transition: all 600ms ease-in-out;
        }
        &::before {
          top: 0;
        }
        &::after {
          bottom: 0;
        }
      }
    }
  }

  #tweet-call-action {
    display: none;
  }
}

</style>
