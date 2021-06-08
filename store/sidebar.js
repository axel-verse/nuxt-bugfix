export const state = () => ({
  isOpened: false,
})

export const mutations = {
  closeBar(state) {
    state.isOpened = false
  },
  toggleBar(state) {
    state.isOpened = !state.isOpened
  },
}
