<template>
  <div>
    <div class="text-center text-2xl mt-16 md:hidden">
      <a :href="resume">
        View Resume
      </a>
    </div>

    <div class="mx-auto max-w-xl">
      <div class="hidden mb-12 text-right md:block">
        <button @click="download">
          <Icon
            name="download"
            class="icon-md text-grey-dark hover:text-grey-darker"
          />
        </button>
      </div>
    </div>

    <div class="hidden mx-auto max-w-xl text-center md:block">
      <div class="mb-16">
        <no-ssr>
          <Pdf
            :src="resume"
            class="shadow-lg"
          />
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
// Packages
import axios from 'axios'

// Icons
import '@/components/icons/download'

// Content
import { me } from '@/config/content'

export default {
  data () {
    return {
      me,
      resume: '/pdf/resume.pdf'
    }
  },

  methods: {
    async download () {
      const response = await axios.get(this.resume, {
        responseType: 'blob'
      })

      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${me.name} resume.pdf`)
      document.body.appendChild(link)
      link.click()
    }
  }
}
</script>
