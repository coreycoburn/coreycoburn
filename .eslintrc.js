module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  rules: {
    'no-console': process.env.PRE_COMMIT ? ['error', { 'allow': ['warn', 'error'] }] : 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          'component',
          'template',
          'transition',
          'transition-group',
          'keep-alive',
          'slot',
          'nuxt',
          'nuxt-link',
          'no-ssr',
        ],
      },
    ],
  }
}