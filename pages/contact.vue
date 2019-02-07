<template>
  <div>
    <div class="container mx-auto mb-32">
      <h1 class="text-center">
        {{ title }}
      </h1>

      <div class="flex flex-col sm:flex-row justify-around mb-16">
        <div class="flex-1 text-center">
          <Icon
            name="map-marker-alt"
            class="icon-md mb-3"
          />

          <h3 class="mb-3">
            Location:
          </h3>

          <div class="leading-loose">
            San Francisco Bay Area
          </div>

          <div class="leading-loose">
            Local &amp; Remote Freelancer
          </div>
        </div>
        <div class="flex-1 text-center mt-6 sm:mt-0">
          <Icon
            name="envelope"
            class="icon-md mb-3"
          />

          <h3 class="mb-3">
            Contact:
          </h3>

          <div class="leading-loose">
            <a :href="`mailto:${me.email}`">
              {{ me.email }}
            </a>
          </div>
        </div>
        <div class="flex-1 text-center mt-6 sm:mt-0">
          <Icon
            name="bullhorn"
            class="icon-md mb-3"
          />

          <h3 class="mb-3">
            Social:
          </h3>

          <ul class="flex list-reset justify-center">
            <li
              v-animate-css.hover="'tada'"
              class="leading-loose mr-3"
            >
              <a
                :href="social.twitter"
                class="border-0"
              >
                <Icon name="twitter" />
              </a>
            </li>

            <li
              v-animate-css.hover="'tada'"
              class="leading-loose mr-3"
            >
              <a
                :href="social.github"
                class="border-0"
              >
                <Icon name="github" />
              </a>
            </li>

            <li
              v-animate-css.hover="'tada'"
              class="leading-loose"
            >
              <a
                :href="social.linkedin"
                class="border-0"
              >
                <Icon name="linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <FormContact />
    </div>
  </div>
</template>

<script>
// Components
import FormContact from '@/forms/Contact'

// Icons
import '@/components/icons/bullhorn'
import '@/components/icons/envelope'
import '@/components/icons/map-marker-alt'

// Content
import { me, social } from '@/config/content'

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    FormContact
  },

  data () {
    return {
      title: 'Contact',
      me,
      social
    }
  }
}
</script>
