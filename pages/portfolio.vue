<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-center">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.title
    }
  },

  data () {
    return {
      title: 'Portfolio'
    }
  }
}
</script>
