export const state = () => ({
  list: [],
  currentWork: {}
})

export const mutations = {
  setList (state, works) {
    state.list = works
  },
  setCurrent (state, work) {
    state.currentWork = work
  }
}
