<template>
  <div>
    <div class="content">
    <div class="feature-text chain-img">FAQ</div>
    <br>
      <h4>
        If Green Oil is biodegradable, will it break down quickly on my bike?
      </h4>
      <p>
        <strong>No.</strong> Warmth, moisture and bacteria are required for our products to biodegrade. Our lubricants last in excess of a month on the bike chain. Some oxidation (reaction with oxygen in the air) with occur, but this occurs with petrochemical products too. A plant based anti-oxidant N-toc reduces oxidation which occurred on in our first Green Oil chain lube formula. Green Oil fluids break down once they in the environment, not on your bike.
      </p>
      <h4>
        What is the shelf life of Green Oil's lubricant and other fluids? Does it biodegrade on the shop shelf?
      </h4>
      <p>
        <strong>More than 3 years.</strong> With the cap on, oxygen to feed any bacteria in the bottle is kept out. The products are stable for more than 3 years on a shelf, even in day light. This is based on an actual 3 year test, we've not tested beyond this. It's assumed the products will last beyond 3 years easily.
      </p>
      <h4>
        Is the Green Oil range suitable for vegetarians?
      </h4>
      <p>
        <strong>Yes.</strong> We don't use any animal by-products.
      </p>
      <br><br>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Green Oil FAQ',
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
  h1 {
    margin: 2rem 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    h4 {
      margin: 1rem 0;
    }
  }
</style>
