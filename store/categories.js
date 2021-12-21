export const state = () => ({
  list: [],
  filterCategory: null
})

export const mutations = {
  setList (state, categories) {
    state.list = categories
  },
  setFilterCategory (state, category) {
    state.filterCategory = category
  }
}
