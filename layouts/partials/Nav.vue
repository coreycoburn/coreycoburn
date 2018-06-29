<template>
    <div class="absolute pin-t z-30 w-full mb-8" :class="{ 'bg-black relative': page !== 'index' }">
        <div class="container mx-auto py-8">
            <div class="flex flex-row content-center mx-6 sm:mx-0 text-white">
                <div class="flex-1">
                    <ul class="flex list-reset">
                        <li v-animate-css.hover="'bounce'" class="mr-4">
                            <a :href="social.twitter" class="nav-link"><icon name="brands/twitter"/></a>
                        </li>
                        <li v-animate-css.hover="'bounce'" class="mr-4">
                            <a :href="social.github" class="nav-link"><icon name="brands/github"/></a>
                        </li>
                        <li v-animate-css.hover="'bounce'">
                            <a :href="social.linkedin" class="nav-link"><icon name="brands/linkedin-in"/></a>
                        </li>
                    </ul>
                </div>

                <div class="flex">
                    <nav-slider/>
                </div>

                <nav>
                    <ul class="hidden md:flex items-end list-reset">
                        <li
                            class="flex-row ml-8"
                            v-for="{ path, absolute, text } in links"
                            :key="text"
                        >
                            <a
                                v-if="absolute"
                                :href="absolute"
                                class="nav-link slide-link"
                            >
                                {{ text }}
                            </a>
                            <nuxt-link
                                v-else
                                :to="{ path }"
                                class="nav-link slide-link"
                                exact
                            >
                                {{ text }}
                            </nuxt-link>
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
import { social } from '@/config/content'
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
            links,
            social
        }
    }
}
</script>
