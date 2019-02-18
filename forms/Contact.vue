<template>
  <form
    ref="contact"
    name="contact"
    method="post"
    action="/thanks"
    netlify
    @submit.prevent="submit"
  >
    <input
      type="hidden"
      name="form-name"
      value="contact"
    >

    <div class="flex flex-col justify-around mb-8 sm:flex-row">
      <div class="flex-1 text-center mx-0 mb-8 w-full w-full sm:ml-16 sm:mr-4 sm:mb-0 sm:w-1/2">
        <input
          v-model="form.name"
          v-validate="'required'"
          type="text"
          name="name"
          placeholder="Name"
          class="w-full p-4 appearance-none border"
        >

        <transition name="fade">
          <div
            v-if="errors.has('name')"
            class="text-red mt-3"
          >
            {{ errors.first('name') }}
          </div>
        </transition>
      </div>
      <div class="flex-1 text-center mx-0 sm:ml-4 sm:mr-16 sm:w-1/2">
        <input
          v-model="form.email"
          v-validate="'required|email'"
          type="text"
          name="email"
          placeholder="Email"
          class="w-full p-4 appearance-none border"
        >

        <transition name="fade">
          <div
            v-if="errors.has('email')"
            class="text-red mt-3"
          >
            {{ errors.first('email') }}
          </div>
        </transition>
      </div>
    </div>
    <div class="flex-1 text-center mx-0 mb-8 sm:mx-16">
      <textarea
        v-model="form.message"
        v-validate="'required'"
        name="message"
        class="w-full p-4 appearance-none border resize-none"
        placeholder="Your message..."
      />

      <transition name="fade">
        <div
          v-if="errors.has('message')"
          class="text-red mt-3"
        >
          {{ errors.first('message') }}
        </div>
      </transition>
    </div>
    <div class="text-center">
      <input
        type="submit"
        class="bg-grey-darker hover:bg-blue-dark text-white font-bold py-4 px-8 rounded cursor-pointer"
        value="Send Message"
      >
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    submit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$refs.contact.submit()
        }
      })
    }
  }
}
</script>
