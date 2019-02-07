<template>
  <div>
    <div class="h-screen">
      <no-ssr>
        <VideoBg
          :sources="['video/developer.mp4']"
          img="img/developer.jpg"
        />
      </no-ssr>
    </div>

    <div class="h-screen w-full bg-blue-darkest opacity-90 absolute pin-t" />

    <div class="flex items-center justify-content h-screen w-full absolute pin-t">
      <div class="container mx-auto">
        <div class="text-center">
          <img
            class="rounded-full border-white border-4 shadow-md mb-4"
            src="~assets/img/avatar.jpg"
            alt="My daughter and I"
          >

          <h1 class="text-3xl md:text-5xl mb-6">
            Hi, I'm {{ me.name }}
          </h1>

          <no-ssr>
            <vue-typer
              :text="skills"
              erase-style="clear"
              :pre-type-delay="0"
              class="hidden md:flex justify-center"
            />
          </no-ssr>

          <p class="md:hidden">
            {{ skills[0] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { me, skills } from '@/config/content'

export default {
  head () {
    return {
      title: `${this.me.name}: ${this.me.title}`,
      bodyAttrs: {
        class: 'text-white'
      }
    }
  },

  data () {
    return {
      me,
      skills
    }
  }
}
</script>
