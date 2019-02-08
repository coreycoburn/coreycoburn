<template>
  <div>
    <div class="container mx-auto max-w-lg px-6 md:px-0">
      <h1 class="text-center">
        {{ title }}
      </h1>
    </div>

    <div class="container mx-auto max-w-lg mb-16 px-6 md:mb-32 md:px-0">
      <p class="md:text-xl">
        {{ description }}
      </p>

      <ul class="list-reset">
        <li>
          <span class="font-bold">
            company:
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
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    client: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: null
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
