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

const fadeIgnore = buildAnimateCssIgnore('fade')
const fadeDownIgnore = buildAnimateCssIgnore('fadeDown')
const slideRightIgnore = buildAnimateCssIgnore('slideRight')

const typerIgnore = ['vue-typer', 'custom', 'char', 'typed', 'caret']
const videoBGIgnore = ['VideoBg', 'VideoBg__content', 'VideoBg video']
const portfolioIgnore = ['item--medium', 'item--large', 'item--full']

module.exports = () => {
  return [
    ...purgeCssIgnore,
    ...fadeIgnore,
    ...fadeDownIgnore,
    ...slideRightIgnore,
    ...typerIgnore,
    ...videoBGIgnore,
    ...portfolioIgnore
  ]
}
