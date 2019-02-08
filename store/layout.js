export const state = () => ({
  layout: {
    pageName: 'index'
  }
})

export const getters = {
  pageName (state) {
    return state.layout.pageName
  }
}

export const mutations = {
  SET_PAGE (state, pageName) {
    state.layout.pageName = pageName
  }
}
