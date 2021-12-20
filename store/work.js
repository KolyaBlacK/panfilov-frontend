export const state = () => ({
  currentWork: {}
})

export const mutations = {
  set (state, work) {
    state.currentWork = work
  }
}
