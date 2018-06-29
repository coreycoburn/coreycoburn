<template>
    <div>
        <div id="hamburger" class="md:hidden z-20" :class="{ 'open': nav.mobile }" @click="toggleNav">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <transition name="slideRight">
            <div class="fixed h-full w-3/5 pin-t pin-r py-16 pl-16 pr-6 bg-blue-darker" v-show="nav.mobile">
                <nav>
                    <ul class="list-reset">
                        <li class="mb-8" v-for="{ path, absolute, text } in links" :key="text">
                            <a
                                v-if="absolute"
                                :href="absolute"
                                class="nav-link slide-link"
                                target="_blank"
                            >
                                {{ text }}
                            </a>
                            <nuxt-link
                                v-else
                                :to="{ path }"
                                class="nav-link slide-link"
                                @click.native="toggleNav"
                                exact
                            >
                                {{ text }}
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </transition>
    </div>
</template>

<script>
import { links } from '@/config/links'

export default {
    data() {
        return {
            links,
            nav: {
                mobile: false,
                transition: ''
            }
        }
    },
    methods: {
        toggleNav() {
            this.nav.mobile = !this.nav.mobile
            this.nav.transition = this.nav.mobile ? 'slideRight' : 'slideRight'
        }
    }
}
</script>
