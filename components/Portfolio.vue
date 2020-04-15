<template>
  <nuxt-link
    :to="{ name: `portfolio-${path}` }"
    :class="itemSize"
    class="item"
    :style="{ 'background-image': `url(/img/portfolio/${image})` }"
    exact
  >
    <div class="item__details rounded-b-lg text-sm md:text-base">
      <slot />

      <div class="text-xs pt-3 md:hidden">
        click to view...
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: null
    },
    image: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },

  computed: {
    // Size can be null, medium, large, or full
    itemSize () {
      if (this.size) {
        return `item--${this.size}`
      }

      return null
    }
  }
}
</script>

<style lang="scss" scoped>
// https://codepen.io/ramenhog/pen/MpORPa
// Author of gallery: https://codepen.io/ramenhog
.item {
  @apply relative flex flex-col justify-end bg-teal text-white rounded-t-lg rounded-b-lg bg-cover bg-left-top cursor-pointer shadow-lg pb-0;
  grid-column-start: auto;
  grid-row-start: auto;
  transition: transform 0.3s ease-in-out;

  &:after {
    @apply absolute w-full h-full bg-black rounded-t-lg rounded-b-lg opacity-0;
    content: '';
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);

    &:after {
      @apply flex opacity-85 justify-center rounded-b-lg items-center text-3xl;
      content: 'click to view...'
    }
  }

  &--medium {
    grid-row-end: span 2;
  }

  &--large {
    grid-row-end: span 3;
  }

  &--full {
    grid-column-end: auto;

    @media screen and (min-width: 768px) {
      grid-column: 1/-1;
      grid-row-end: span 2;
    }
  }

  &__details {
    @apply uppercase relative text-center z-10 p-5 text-grey-darker bg-white tracking-wide;
  }
}
</style>
