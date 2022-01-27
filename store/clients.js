export const state = () => ({
  list: [],
})

export const mutations = {
  setList (state, clients) {
    state.list = clients
  },
}
