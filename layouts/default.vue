<template>
  <div class="container">
    <PageHeader />
    <div class="main-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      currentPage: 'bob'
    }
  },
  components: {
    PageHeader,
    Footer
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@500&family=Special+Elite&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Fira Sans Extra Condensed', sans-serif;
  color: $normal-font;
}

.container {
  margin: 0 auto;
  width: 85vw;
  min-width: 800px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  text-align: center;
  box-shadow: 0 0 4px 0 black;
  background: $background;
}

.main-content {
  width: 100%;
  padding: 1rem 3rem;
  background: white;
}

a {
  color: white;
  &:visited, &:hover, &:active {
    color:white;
  }
}

</style>
