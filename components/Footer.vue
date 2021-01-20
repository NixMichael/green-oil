<template>
  <div class="footer">
    <div id="footer-links">
      <a target="blank" href="https://www.green-oil.net/wholesale.html">Stock Green Oil</a>
      <a target="blank" href="https://www.green-oil.net/contact.html">Contact Us</a>
      <a target="blank" href="https://www.green-oil.net/happiness">Reasons To Be Happy</a>
    </div>
    <p>&copy; {{ thisYear }} Green Oil UK Limited</p><br/>
    <p>Contact us on 020 7274 8725</p><br/>
    <p>Tweet us <a target="_blank" href="https://www.twitter.com/greenoil">@GreenOil</a> | Find us on Facebook: <a target="_blank" href="https://www.facebook.com/bicycleoil">/BicycleOil</a> | Follow us at <a target="_blank" href="https://www.instagram.com/greenoiluk">Instagram/GreenOilUK</a>.</p><br/>
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
    padding: 0.5rem 0 2rem;
    font-size: 0.9rem;

    a, a:visited {
      color: rgb(228, 228, 228);
    }

    #footer-links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 1rem auto 2rem;

      a {
        min-width: 180px;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        color: $background;
        background: white;
        border-radius: 14px;
        text-decoration: none;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.3);
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
