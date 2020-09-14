<template>
  <div class="footer">
    <div id="footer-links">
      <a target="blank" href="https://www.green-oil.net/wholesale.html">Stock Green Oil</a>
      <a target="blank" href="https://www.green-oil.net/happiness">Reasons To Be Happy</a>
      <a target="blank" href="https://www.green-oil.net/contact.html">Contact Us</a>
    </div>
    <p>&copy; {{ thisYear }} Green Oil UK Limited</p><br/>
    <p>Registered Office: Green Oil UK Limited, Unit S7, The Old Granary, 245 Coldharbour Lane, London, SW9 8RR</p><br/>
    <p>Registered in England and Wales, No. 6470586. VAT: 980 6213 19</p><br/>
    <p>Contact us on 020 7274 8725</p><br/>
    <p>Tweet us <a target="_blank" href="https://www.twitter.com/greenoil">@GreenOil</a> | Find us on Facebook: <a target="_blank" href="https://www.facebook.com/bicycleoil">/BicycleOil</a> | Follow us at <a target="_blank" href="https://www.instagram.com/greenoiluk">Instagram/GreenOilUK</a>.</p><br/>
    <p>Product images from this site may be used for use in selling our products.</p>
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

    #footer-links {
      margin: 1rem auto 2rem;
      width: 70%;
      display: flex;
      justify-content: space-between;

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
</style>
