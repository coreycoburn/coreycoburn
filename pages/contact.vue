<template>
    <div>
        <div class="container mx-auto">
            <h1 class="text-center">{{ title }}</h1>
            <div class="flex flex-col sm:flex-row justify-around mb-16">
                <div class="flex-1 text-center">
                    <icon name="solid/map-marker-alt" class="icon-md mb-3"/>
                    <h3 class="mb-3">Location:</h3>
                    <div class="leading-loose">San Francisco Bay Area</div>
                    <div class="leading-loose">Local &amp; Remote Freelancer</div>
                </div>
                <div class="flex-1 text-center mt-6 sm:mt-0">
                    <icon name="solid/envelope" class="icon-md mb-3"/>
                    <h3 class="mb-3">Contact:</h3>
                    <div class="leading-loose"><a :href="`mailto:${me.email}`">{{ me.email }}</a></div>
                </div>
                <div class="flex-1 text-center mt-6 sm:mt-0">
                    <icon name="solid/bullhorn" class="icon-md mb-3"/>
                    <h3 class="mb-3">Social:</h3>
                    <ul class="flex list-reset justify-center">
                        <li class="leading-loose mr-3" v-animate-css.hover="'tada'">
                            <a :href="social.twitter" class="border-0"><icon name="brands/twitter"/></a>
                        </li>
                        <li class="leading-loose mr-3" v-animate-css.hover="'tada'">
                            <a :href="social.github" class="border-0"><icon name="brands/github"/></a>
                        </li>
                        <li class="leading-loose" v-animate-css.hover="'tada'">
                            <a :href="social.linkedin" class="border-0"><icon name="brands/linkedin-in"/></a>
                        </li>
                    </ul>
                </div>
            </div>

            <form-contact/>
        </div>
    </div>
</template>

<script>
import { me, social } from '@/config/content'
import FormContact from '@/forms/Contact'
import '@/components/icons/solid/map-marker-alt'
import '@/components/icons/solid/envelope'
import '@/components/icons/solid/bullhorn'

export default {
    head() {
        return {
            title: this.title
        }
    },
    components: {
        FormContact
    },
    data() {
        return {
            title: 'Contact',
            me,
            social
        }
    }
}
</script>
