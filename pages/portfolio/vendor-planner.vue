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
      title: 'Vendor Planner Saas',
      portfolio: {
        stack: [
          { name: 'Vue.js', url: 'https://vuejs.org' },
          { name: 'Nuxt', url: 'https://nuxtjs.org/' },
          { name: 'Laravel', url: 'https://laravel.com' },
          { name: 'Tailwind CSS', url: 'https://tailwindcss.com' }
        ],
        description: 'I am currently in the process of building a multi-tenant SaaS application for the event vendor service / hospitality industry. I have worked in the field for over 10 years and know the logistics of what vendors have to focus on logistically to ensure that they provide excellent service for their clients. This application will be a turnkey for current or new vendors in the market to facilitate their day-to-day and planning operations.',
        images: [
          { path: 'vendorplannerlogin.png', alt: 'Vendor Planner login' },
          { path: 'vendorplannerdash.png', alt: 'Vendor Planner dashboard' }
        ]
      }
    }
  }
}
</script>
