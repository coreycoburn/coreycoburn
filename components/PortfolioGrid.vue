<template>
  <nuxt-link
    :to="{ name: `portfolio-${path}` }"
    class="portfolio__container w-full h-64 mb-16 md:w-1/3 md:h-128 md:mb-0"
    exact
  >
    <div
      class="portfolio__image"
      :style="{ 'background-image': `url(/img/portfolio/${image})` }"
    />

    <div class="portfolio__content">
      <div
        class="w-full text-2xl bg-teal p-3 mb-6"
        v-text="title"
      />

      <div
        class="pl-3"
        v-text="description"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio__container {
  @apply relative flex cursor-pointer;

   > div  {
    @apply absolute pin opacity-90;
    transition: all .4s ease;
  }
}

.portfolio__image {
  @apply bg-cover bg-center;
}

.portfolio__content {
  @apply flex flex-col px-6 py-12 bg-black text-teal-lightest;

  &:hover {
    @apply opacity-0;
  }
}

</style>
