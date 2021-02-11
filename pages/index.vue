<template>
  <div class="content">
    <div class="feature-text chain-img">
      Greenest bicycle maintenance products
    </div>
    <br>
    <p>
      Simon created Green Oil after a mountain bike ride through the River Quaggy where he began wondering where he could find a biodegradable lubricant. Other lubes said 'Dangerous for the Environment' on the bottle. So Simon created his own whilst at Southampton University.</p>
    <br><br>
    <p>
      Watch the full story here:<br>
      <div class="video-content">
        <iframe
          src="https://www.youtube.com/embed/NpJJcNtzfms"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </p>
    <div class="feature-text chain-img">
      Made in Britain. Skin safe. No carcinogenic PTFE.
    </div>
    <br>
    <p>
      Green Oil started with a sample batch in 2007 when the Tour de France started in Trafalgar Square, London. Empty bottles purchased through eBay, bottles filled through a reclaimed beer tap, and labels designed in Microsoft Word, printed onto paper and applied with glue.
      <br><br>
      We've come a long way since then. Check out how our branding has changed, and the range grown.
    </p>
    <br>
    <div class="feature-text chain-img">
      If you care about your bike and the planet you ride on, you're in the right place.
    </div>
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
  width: 80%;
  margin: 0 auto;
}

  @media screen and (max-width: 800px) {
    .content {
      width: 100%;
    }
  }
</style>
