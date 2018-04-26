<template>
      <div>
        <v-nav/>
        <div :class="{ 'mx-6': page !== 'index' }">
            <transition name="fadeDown">
                <nuxt/>
            </transition>
        </div>
        <v-footer v-show="page !== 'index'"/>
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
