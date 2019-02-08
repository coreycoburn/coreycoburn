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
      title: 'CRM/ERM Web Application',
      portfolio: {
        client: 'C.P.A. Valet',
        url: 'https://members.cpavalet.com',
        description: 'Internal CRM and ERM (Customer Relationship Management and Employee Relationship Management) that runs the day-to-day operations for C.P.A. Valet.',
        images: [
          { path: 'cpa-valet-crm.jpg', alt: 'Dashboard for the C.P.A. Valet web application' },
          { path: 'cpa-valet-crm2.jpg', alt: 'Scheduling page for employees for the C.P.A. Valet web application' },
          { path: 'cpa-valet-crm3.jpg', alt: 'Sample contract PDF that was dynamically generated with the C.P.A. Valet web application' }
        ]
      }
    }
  }
}
</script>
