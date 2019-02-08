<template>
  <div class="mb-16 md:mb-32">
    <PortfolioItem
      :title="title"
      :client="portfolio.client"
      :url="portfolio.url"
      :description="portfolio.description"
      :images="portfolio.images"
    />
  </div>
</template>

<script>
// Components
import PortfolioItem from '@/components/PortfolioItem'

export default {
  components: {
    PortfolioItem
  },

  head () {
    return {
      title: this.title
    }
  },

  data () {
    return {
      title: 'Liv Admin Template',
      portfolio: {
        client: 'Liv Themes',
        url: 'https://liv.coburn.codes',
        description: 'An admin template built in Vue and also in Nuxt. The Vue version uses Vue cli 3 and the Nuxt version is currently using Nuxt 2.5. The admin template is currently in developemnt and has not currently been released.',
        images: [
          { path: 'liv.jpg', alt: 'Dashboard for the Liv Admin Template' }
        ]
      }
    }
  }
}
</script>
