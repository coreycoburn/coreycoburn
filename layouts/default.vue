<template>
  <div class="flex flex-col h-screen">
    <div class="fixed w-full z-30">
      <VNav />
    </div>

    <div
      :class="{ 'mt-40': page !== 'index' }"
      class="flex-grow"
    >
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
