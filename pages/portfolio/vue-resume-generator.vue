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
      title: 'Vue Resume Generator',
      portfolio: {
        github: 'https://github.com/coreycoburn/vue-resume-generator',
        stack: [
          { name: 'Vue.js', url: 'https://vuejs.org' },
          { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
          { name: 'Pupppeteer - Headless Chrome API', url: 'https://pptr.dev' }
        ],
        description: 'This personal project was built out of the desire to update my resume in a fun way. I love designing in design tools / in the browser and being able to keeping data centrally located and easily callable. This tool uses the Tailwind CSS framework for designing both resumes and cover letters. The resume / cover letters is exported via a headless Chrome API, Puppeteer as either an image or a PDF.',
        images: [
          { path: 'vue-resume-generator-md.png', alt: 'Vue Resume Generator readme screenshot' },
          { path: 'vue-resume-generator-sample-md.png', alt: 'Vue Resume Generator sample' }
        ]
      }
    }
  }
}
</script>
