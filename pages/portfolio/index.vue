<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-center">
        {{ title }}
      </h1>
    </div>

    <div class="mx-auto max-w-md text-center mb-16 text-xl px-6 md:px-0">
      <p>
        A small sample of some of my work from over the past few years. To see some code examples, please visit my <a :href="social.github">
          Github page
        </a>.
      </p>
    </div>

    <div class="flex flex-wrap">
      <PortfolioGrid
        image="cpa-valet-grid.jpg"
        path="cpa-valet"
        title="Marketing Site"
        description="C.P.A. Valet"
        class="border-r-4"
      />

      <PortfolioGrid
        image="cpa-valet-crm-grid.jpg"
        path="cpa-valet-crm"
        title="CRM Web Application"
        description="C.P.A. Valet"
        class="md:border-r-4"
      />

      <PortfolioGrid
        image="liv-grid.jpg"
        path="liv-admin-template"
        title="Admin template"
        description="Liv Themes"
      />
    </div>
  </div>
</template>

<script>
// Components
import PortfolioGrid from '@/components/PortfolioGrid'

// Content
import { social } from '@/config/content'

export default {
  components: {
    PortfolioGrid
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
