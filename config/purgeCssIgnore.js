const purgeCssIgnore = [
  'html',
  'body',
  'nuxt-progress',
  'exact-active',
  'active',
  'svg-icon'
]

const buildAnimateCssIgnore = (animate) => {
  return [
    animate,
    animate + '-enter',
    animate + '-enter-active',
    animate + '-enter-to',
    animate + '-leave',
    animate + '-leave-active',
    animate + '-leave-to'
  ]
}

const fadeDownIgnore = buildAnimateCssIgnore('fadeDown')
const slideRightIgnore = buildAnimateCssIgnore('slideRight')

const typerIgnore = ['vue-typer', 'custom', 'char', 'typed', 'caret']
const videoBGIgnore = ['VideoBg', 'VideoBg__content', 'VideoBg video']

module.exports = () => {
  return [
    ...purgeCssIgnore,
    ...fadeDownIgnore,
    ...slideRightIgnore,
    ...typerIgnore,
    ...videoBGIgnore
  ]
}
