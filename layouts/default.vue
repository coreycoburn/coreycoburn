<template>
  <div class="flex flex-col h-screen">
    <VNav />

    <div class="flex-grow">
      <transition name="fadeDown">
        <nuxt />
      </transition>
    </div>

    <VFooter v-show="page !== 'index'" />
  </div>
</template>

<script>
import VFooter from './partials/Footer'
import VNav from './partials/Nav'

export default {
  head: {
    bodyAttrs: {
      class: 'font-serif bg-grey-lightest text-grey-darker'
    }
  },

  components: {
    VFooter,
    VNav
  }
}
</script>
