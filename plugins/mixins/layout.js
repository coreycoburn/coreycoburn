import Vue from 'vue'
import { mapGetters } from 'vuex'

const Layout = {
    install(Vue, options) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    page: 'layout/page'
                })
            }
        })
    }
}

Vue.use(Layout)
