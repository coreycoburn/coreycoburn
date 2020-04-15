<template>
  <div class="mb-16 md:mb-32">
    <PortfolioItem
      :title="title"
      :client="portfolio.client"
      :url="portfolio.url"
      :github="portfolio.github"
      :stack="portfolio.stack"
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
      title: 'Help Matt Appleby Fundraising Site',
      portfolio: {
        client: 'Matt Appleby Brain Cancer Fund',
        url: 'https://helpmattappleby.com',
        github: 'https://github.com/coreycoburn/matts-journey',
        stack: [
          { name: 'Vue.js', url: 'https://vuejs.org' },
          { name: 'Gridsome Framework', url: 'https://gridsome.org' },
          { name: 'Paypal Checkout SDK', url: 'https://developer.paypal.com/docs/checkout' },
          { name: 'Contentful', url: 'https://www.contentful.com' }
        ],
        description: 'This website was build with the Vue.js framework Gridsome. It integrates with the Paypal API to implement Paypal and credit card payments. The payment flow in it\'s entirety was custom built. The data store for the payment transactions is stored with Contentful. Data for the client is then passed off to the client to a private Google spreadsheet via Zapier.',
        images: [
          { path: 'help-matt-appleby-md.png', alt: 'Website hero image' },
          { path: 'help-matt-appleby-paypal-md.png', alt: 'Paypal modal' }
        ]
      }
    }
  }
}
</script>
