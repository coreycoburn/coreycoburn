const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const glob = require('glob-all')

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:/]+/g) || []
    }
}

module.exports = {
    /*
  ** Headers of the page
  */
    head: {
        title: 'coreycoburn',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Resume site for Corey Coburn'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /**
     ** Add plugins
     */
    plugins: [
        '@/plugins/scrollTo',
        { src: '@/plugins/animateCss', ssr: false }
    ],
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
     ** Customize the progress bar color
    */
    router: {
        linkActiveClass: 'active',
        linkExactActiveClass: 'exact-active'
    },
    /*
  ** Build configuration
  */
    build: {
        /*
    ** Run ESLint on save
    */
        extractCSS: true,
        postcss: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer')
        ],
        extend(config, { isDev, isClient }) {
            if (!isDev) {
                config.plugins.push(
                    new PurgecssPlugin({
                        paths: glob.sync([
                            path.join(__dirname, './pages/**/*.vue'),
                            path.join(__dirname, './layouts/**/*.vue'),
                            path.join(__dirname, './components/**/*.vue')
                        ]),
                        extractors: [
                            {
                                extractor: TailwindExtractor,
                                extensions: ['vue']
                            }
                        ],
                        whitelist: ['html', 'body', 'nuxt-progress']
                    })
                )

                config.plugins.push(
                    new CopyWebpackPlugin([
                        {
                            from: './assets/img/',
                            to: 'static/img/',
                            ignore: ['*.svg']
                        }
                    ]),
                    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
                )
            }

            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    css: ['@/assets/scss/main.scss']
}
