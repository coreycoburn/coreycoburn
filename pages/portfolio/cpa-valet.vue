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
      title: 'Marketing Website',
      portfolio: {
        client: 'C.P.A. Valet',
        url: 'https://cpavalet.com',
        description: 'This site was developed using the Nuxt framework and is statically hosted on Netlify. The website connects to an internal API for dynamic data and processes new hire applicants, quote requests, client contract signatures and client payments.',
        images: [
          { path: 'cpa-valet.jpg', alt: 'C.P.A. Valet marketing website hero slider' },
          { path: 'cpa-valet2.jpg', alt: 'C.P.A. Valet marketing website employment application' },
          { path: 'cpa-valet3.jpg', alt: 'C.P.A. Valet marketing website testimonial timeline' }
        ]
      }
    }
  }
}
</script>
