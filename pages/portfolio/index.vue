<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-center">
        {{ title }}
      </h1>
    </div>

    <div class="mx-auto max-w-md text-center mb-16 text-xl px-6 md:px-0">
      <p>
        A small sample of some of my work from over the past few years. To see some code examples (including the code for this website), please visit my <a :href="social.github">
          Github page
        </a>.
      </p>
    </div>

    <section class="section">
      <div class="grid mb-16">
        <Portfolio
          size="large"
          image="cpa-valet-grid.jpg"
          path="cpa-valet"
        >
          Marketing Site for C.P.A. Valet
        </Portfolio>

        <Portfolio
          size="large"
          image="cpa-valet-crm-grid.jpg"
          path="cpa-valet-crm"
        >
          Web App (Custom CRM) for C.P.A. Valet
        </Portfolio>

        <Portfolio
          size="large"
          image="liv-grid.jpg"
          path="liv-admin-template"
        >
          Admin template - Liv Themes
        </Portfolio>
      </div>
    </section>
  </div>
</template>

<script>
// Components
import Portfolio from '@/components/Portfolio'

// Content
import { social } from '@/config/content'

export default {
  components: {
    Portfolio
  },

  head () {
    return {
      title: this.title
    }
  },

  data () {
    return {
      title: 'Portfolio',
      social
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  @apply m-8 hidden;

  @supports(display: grid) {
    @apply block;
  }
}

.grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 150px;
  grid-auto-flow: row dense;
}
</style>
