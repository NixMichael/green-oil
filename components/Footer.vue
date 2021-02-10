<template>
  <div class="footer">
    <div id="footer-links">
      <div>
        <p>Contact us on 020 7274 8725</p><br>
      </div>
      <div id="social-icons">
        <!-- <div id="contact-number">
          <img src="../assets/ICONS/phone-symbol.png" alt="call us" /><p>020 7274 8725</p>
        </div> -->
        <a target="_blank" href="https://www.twitter.com/greenoil"><img src="../assets/ICONS/twitter.png" alt="Twitter" /></a>
        <a target="_blank" href="https://www.instagram.com/greenoiluk"><img src="../assets/ICONS/instagram.png" alt="Instagram" /></a>
        <a target="_blank" href="https://www.facebook.com/bicycleoil"><img src="../assets/ICONS/facebook.png" alt="Facebook" /></a>
      </div>
      <div>
        <p>&copy; {{ thisYear }} Green Oil UK Limited</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      thisYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="scss">
  .footer {
    color: white;
    background: $banner-bg;
    padding: 0.5rem 0;
    font-size: 1rem;

    a, a:visited {
      color: rgb(228, 228, 228);
    }

    #footer-links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 1rem auto;
      padding: 0 2rem;

      p {
        padding-top: 0.5em;
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
  }

  @media screen and (max-width: 450px) {
    .footer {
      margin-bottom: 25px;

      #footer-links {
        flex-direction: column;
        align-items: center;
        a {
          width: 50%;
          margin-bottom: 1rem;
        }
      }
    }

    // #footer-links {
    //   flex-direction: column;
    //   align-items: center;
    //   // flex-wrap: wrap;
    //   a {
    //     margin-bottom: 1rem;
    //   }
    // }
  }
</style>
