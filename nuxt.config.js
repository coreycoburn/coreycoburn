import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import glob from 'glob-all'
import pkg from './package'

const ImageminPlugin = require('imagemin-webpack-plugin').default

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        name: 'google-site-verification',
        content: 'nKnYB7HS47TX9PSIISbTtg9ApnqLlSo-3Ig04GKQXAI'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:creator',
        content: '@coreycoburn'
      },
      {
        property: 'og:url',
        content: pkg.homepage
      },
      {
        property: 'og:title',
        content: 'Corey Coburn | Full-Stack Web Developer'
      },
      {
        property: 'og:title',
        content: pkg.description
      },
      {
        property: 'og:image',
        content: '/img/corey.png'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   ** Add plugins
   */
  plugins: [
    '@/plugins/mixins/layout',
    '@/plugins/scrollTo',
    '@/plugins/svgIcon',
    '@/plugins/veeValidate',
    { src: '@/plugins/animateCss', ssr: false },
    { src: '@/plugins/pdf', ssr: false },
    { src: '@/plugins/typer', ssr: false },
    { src: '@/plugins/videobg', ssr: false }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Thank you nuxt community!
   */
  modules: [
    // '@nuxtjs/localtunnel'
  ],
  /*
   ** Customize the progress bar color
   */
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    middleware: ['layout'],
    scrollBehavior: function () {
      return { x: 0, y: 0 }
    }
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
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './forms/**/*.vue'),
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
            whitelist: require('./config/purgeCssIgnore')
          })
        )

        config.plugins.push(
          new CopyWebpackPlugin([
            {
              from: './assets/',
              to: 'static/',
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

        config.output.globalObject = 'this'
      }
    }
  },
  css: ['@/assets/scss/main.scss']
}
