export const DARK_THEME = 'dark'
export const LIGHT_THEME = 'light'

export const state = () => ({
  theme: DARK_THEME
})

export const mutations = {
  set (state, theme = DARK_THEME) {
    state.theme = theme
  }
}
