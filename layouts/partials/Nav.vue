<template>
  <div
    class="w-full"
    :class="{ 'diamonds relative shadow-md': pageName !== 'index' }"
  >
    <div class="container mx-auto py-8">
      <div class="flex flex-row content-center mx-6 sm:mx-0 text-white">
        <div class="flex-1">
          <ul class="flex list-reset">
            <li
              v-animate-css.hover="'bounce'"
              class="mr-4"
            >
              <a
                :href="social.twitter"
                class="nav-link"
              >
                <Icon name="twitter" />
              </a>
            </li>

            <li
              v-animate-css.hover="'bounce'"
              class="mr-4"
            >
              <a
                :href="social.github"
                class="nav-link"
              >
                <Icon name="github" />
              </a>
            </li>

            <li v-animate-css.hover="'bounce'">
              <a
                :href="social.linkedin"
                class="nav-link"
              >
                <Icon name="linkedin-in" />
              </a>
            </li>
          </ul>
        </div>

        <div class="flex">
          <NavSlider />
        </div>

        <nav>
          <ul class="hidden md:flex items-end list-reset">
            <li
              v-for="{ path, absolute, text } in links"
              :key="text"
              class="flex-row ml-8"
            >
              <a
                v-if="absolute"
                :href="absolute"
                class="nav-link slide-link"
              >
                {{ text }}
              </a>

              <nuxt-link
                v-else
                :to="{ path }"
                :class="{ 'exact-active': subIsActive(path) }"
                class="nav-link slide-link"
                exact
              >
                {{ text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import NavSlider from './NavSlider'

// Icons
import '@/components/icons/github'
import '@/components/icons/linkedin-in'
import '@/components/icons/twitter'
import '@/components/icons/bars'

// Content
import { links } from '@/config/links'
import { social } from '@/config/content'

export default {
  components: {
    NavSlider
  },

  data () {
    return {
      links,
      social
    }
  },

  methods: {
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input]

      return paths.some(path => {
        return this.$nuxt.$route.path.indexOf(path) === 0 && input !== '/'
      })
    }
  }
}
</script>
