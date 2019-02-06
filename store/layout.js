export const state = () => ({
  layout: {
    page: 'index'
  }
})

export const getters = {
  page (state) {
    return state.layout.page
  }
}

export const mutations = {
  SET_PAGE (state, page) {
    state.layout.page = page
  }
}
