export default ({ store, route }) => {
    store.commit('layout/SET_PAGE', route.name)
}
