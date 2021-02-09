<template>
  <div>
  <div class="nav-container">
    <!-- <div id="top-banner"> -->
    <div id="twitter-cta">
      <div id="social-icons">
        <!-- <div id="contact-number">
          <img src="../assets/ICONS/phone-symbol.png" alt="call us" /><p>020 7274 8725</p>
        </div> -->
        <a target="_blank" href="https://www.twitter.com/greenoil"><img src="../assets/ICONS/twitter.png" alt="Twitter" /></a>
        <a target="_blank" href="https://www.instagram.com/greenoiluk"><img src="../assets/ICONS/instagram.png" alt="Instagram" /></a>
        <a target="_blank" href="https://www.facebook.com/bicycleoil"><img src="../assets/ICONS/facebook.png" alt="Facebook" /></a>
      </div>
    </div>
    <!-- </div> -->
    <div id="header-image">
    </div>
  </div>
  <div class="navigation">
    <div class="waves"></div>
    <input type="checkbox" id="toggler"/>
    <div class="menu-wrapper">
      <div class="burger-menu"><div></div></div>
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
    width: 100%;
    height: 130px;
    background: $banner-bg;
    position: relative;
  }

  #toggler {
    display: none;
  }

  #twitter-cta {
    position: absolute;
    bottom: 10px;
    right: 0;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    color: white;
    background: $banner-bg;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    #contact-number {
      width: 420px;
      height: 20px;
      margin-left: 1rem;
      display: flex;
      p {
        width: 120px;
      }
    }

    #social-icons {
      width: 120px;
      margin-right: 10px;
      display: flex;
      justify-content: space-between;
      a img {
        height: 2rem;
      }
    }
  }

  #header-image {
    position: absolute;
    left: 15px;
    top: 8px;
    height: 130px;
    width: 100%;
    background-color: '#a9c7a9';
    background-image: url('../assets/IMAGES/LogoWhite.png');
    background-position-x: left;
    background-position-y: top;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    // transform: rotate(-5deg);

    img {
      width: 100%;
    }
  }

  .navigation {
    width: 100%;
    background: #a9c7a9;
    padding: 0.5rem 0;
    position: relative;
    margin-top: 2px;

    .waves {
      position: absolute;
      top: -1px;
      left: 0;
      right: 0;
      height: 15px;
      background-color: $banner-bg;
      background-image: url('../assets/IMAGES/header-wave.png');
      background-size: contain;
    }

    // & ::before {
    //   content: '';
    //   width: 100%;
    //   height: 20px;
    //   position: absolute;
    //   top: -20px;
    //   left: 0;
    //   background-image: url('../assets/IMAGES/header-wave.png');
    //   background-size: contain;
    //   z-index: 0;
    // }

    div {
      max-width: 760px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      font-family: 'Fira Sans Extra Condensed', sans-serif;
    }

    a {
      margin-top: 10px;
      color: $titles-color;
      padding: 0.5rem 2rem;
      font-size: 1.2rem;
      text-decoration: none;
      display: flex;
      justify-content: center;
      position: relative;

      &:hover {
        // background: rgba(0, 0, 0, 0.4);
        // outline: 7px solid rgba(0, 0, 0, 0.4);
        color: white;
        transition: all 600ms ease;
      }
    }

    .nuxt-link-active, .nuxt-link-exact-active {
      text-decoration: underline;
      text-decoration-color: white;
      text-decoration-thickness: 5px;
      &::after {
        content: '';
        position: absolute;
        bottom: -16px;
        width: 1px;
        height: 1px;
        background: #a9c7a9;
        z-index: 10;
        border-top: 8px solid #a9c7a9;
        border-left: 25px solid white;
        border-right: 25px solid white;
      }
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
    width: 100%;
    padding: 0;
    padding-bottom: 10px;
    background-color: $banner-bg;
    .waves {
      display: none;
    }

    .nuxt-link-active, .nuxt-link-exact-active {
      text-decoration: underline;
      &::after {
        display: none;
      }
    }

    #toggler {
      display: block;
      z-index: 25;
      opacity: 0;
      position: fixed;
      top: 20px;
      right: 34px;
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
        color: white;
        font-size: 2rem;
        margin: 1rem;
        background: none;
        outline: none;
      }
    }

    .menu-wrapper {
      z-index: 24;
      position: fixed;
      top: 15px;
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
