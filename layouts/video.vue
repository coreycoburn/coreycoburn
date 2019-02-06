<template>
  <div>
    <VNav />
    <transition name="fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import VNav from './partials/Nav'

export default {
  head: {
    bodyAttrs: {
      class: 'font-serif bg-grey-lightest text-grey-darker'
    }
  },

  components: {
    VNav
  }
}
</script>
