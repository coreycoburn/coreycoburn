<template>
  <div>
    <div class="container mx-auto max-w-lg px-6 md:px-0">
      <div class="mb-8">
        <div class="flex">
          <div class="flex-1">
            <nuxt-link
              :to="{ name: 'portfolio' }"
              exact
              class="inline-flex items-center"
            >
              <Icon
                name="arrow-alt-circle-left"
                class="mr-3"
              />

              <div>
                back to portfolio list
              </div>
            </nuxt-link>
          </div>
          <div v-if="github">
            <a
              :href="github"
            >
              <Icon name="github" />
            </a>
          </div>
        </div>
      </div>

      <h1 class="text-center">
        {{ title }}
      </h1>
    </div>

    <div class="container mx-auto max-w-lg mb-16 px-6 md:mb-32 md:px-0">
      <p class="md:text-xl">
        {{ description }}
      </p>

      <ul class="list-reset mb-8">
        <li v-if="client">
          <span class="font-bold">
            company / client:
          </span>
          {{ client }}
        </li>

        <li v-if="url">
          <span class="font-bold">
            url:
          </span>
          <a
            :href="url"
            v-text="url"
          />
        </li>
      </ul>

      <div v-if="stack.length > 0">
        <h3>Tech Stack</h3>
        <ul class="list-reset">
          <li
            v-for="({ name, url: stackUrl }, index) in stack"
            :key="index"
          >
            <a
              :href="stackUrl"
              v-text="name"
            />
          </li>
        </ul>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row">
        <div
          v-for="({ path, alt }, index) in images"
          :key="index"
          class="w-full text-center mb-6 mr-8 md:w-1/3 md:mb-0"
        >
          <img
            class="md:shadow-lg rounded-lg"
            :src="`/img/portfolio/${path}`"
            :alt="alt"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Icons
import '@/components/icons/arrow-alt-circle-left'
import '@/components/icons/github'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    client: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    github: {
      type: String,
      default: ''
    },
    stack: {
      type: Array,
      default: () => []
    },
    description: {
      type: String,
      default: null
    },
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
