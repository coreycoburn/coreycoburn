<template>
    <div class="absolute pin-t z-30 w-full mb-8" :class="{ 'bg-black relative': page !== 'index' }">
        <div class="container mx-auto py-8">
            <div class="flex flex-row content-center mx-6 sm:mx-0 text-white">
                <div class="flex-1">
                    <ul class="flex list-reset">
                        <li v-animate-css.hover="'bounce'" class="mr-4">
                            <a href="https://twitter.com/coreycoburn" class="nav-link"><icon name="brands/twitter"/></a>
                        </li>
                        <li v-animate-css.hover="'bounce'" class="mr-4">
                            <a href="https://github.com/coreycoburn" class="nav-link"><icon name="brands/github"/></a>
                        </li>
                        <li v-animate-css.hover="'bounce'">
                            <a href="https://www.linkedin.com/in/coreycoburn" class="nav-link"><icon name="brands/linkedin-in"/></a>
                        </li>
                    </ul>
                </div>

                <div class="flex">
                    <nav-slider/>
                </div>

                <nav>
                    <ul class="hidden md:flex items-end list-reset">
                        <li class="flex-row ml-8" v-for="link in links" :key="link.text">
                            <nuxt-link :to="{ path: link.path }" class="nav-link slide-link" exact>{{ link.text }}</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import NavSlider from './NavSlider'
import { links } from '@/config/links'
import '@/components/icons/brands/github'
import '@/components/icons/brands/linkedin-in'
import '@/components/icons/brands/twitter'
import '@/components/icons/solid/bars'

export default {
    components: {
        NavSlider
    },
    data() {
        return {
            links
        }
    }
}
</script>
