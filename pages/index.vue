<template>
  <div class="content">
    <p class="feature-text">
      Green Oil: The world's greenest bicycle maintenance products
    </p>
    <br>
    <p>
      Simon created Green Oil after a mountain bike ride through the River Quaggy where he began wondering where he could find a biodegradable lubricant. Other lubes said 'Dangerous for the Environment' on the bottle. So Simon created his own whilst at Southampton University.
    <br><br>
    <p>
      Watch the full story here:
    </p>
    <p class="feature-text">
      Made in Britain. Skin safe. No carcinogenic PTFE.
    </p>
    <br>
    <p>
      Green Oil started with a sample batch in 2007 when the Tour de France started in Trafalgar Square, London. Empty bottles purchased through eBay, bottles filled through a reclaimed beer tap, and labels designed in Microsoft Word, printed onto paper and applied with glue.
      <br><br>
      We've come a long way since then. Check out how our branding has changed, and the range grown.
    </p>
    <br>
    <p class="feature-text">
      If you care about your bike and the planet you ride on, you're in the right place.
    </p>
      <br>
    <p>
    We've been fighting PTFE and petrochemical pollution since 2007.
    </p>
      <br>
    <p>
    We've been raising awareness of the harm petrochemicals and PTFE can do in a workshop environment, in your garage, and to the rivers and seas we all enjoy.
    </p>
      <br>
    <p>
    From using recycled (not just recyclable) plastic in our bottles to plant based fully biodegradable formulas, we're protecting you, your bike, and the planet we share.
    </p>
    <br>
    <p class="feature-text">
      The Green Oil range works.<br>We've won awards.<br>
      Developed by Cyclists, for Cyclists.
    </p>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About Green Oil',
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
    margin: 0 auto 2rem;
    width: 70%;
  }

  p {
    font-size: 1.3rem;

    &.feature-text {
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
  }
</style>
