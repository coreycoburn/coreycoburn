<template>
  <div class="container mx-auto text-center mt-16 max-w-md">
    <h1 class="text-5xl">{{ error.statusCode }} Error</h1>
    <div class="text-lg">
      <p>{{ error.message }}.</p>
      <p>If you feel you've reached this page in error, please contact me @ <a :href="`mailto:${me.email}`" v-text="me.email"/>.</p>
    </div>
  </div>
</template>

<script>
// Data
import { me } from '@/config/content'

export default {
  props: ['error'],
  data() {
    return {
      me
    }
  }
}
</script>
