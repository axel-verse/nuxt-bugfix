export const state = () => ({
  content: [],
  maxPages: 1,
})

export const mutations = {
  setContent(state, payload) {
    state.content = payload
  },
  setPages(state, payload) {
    state.maxPages = payload
  },
}

export const actions = {
  async init({ commit }) {
    const content = await this.$content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
    const length = Math.ceil(content.length / 10)
    commit('setPages', length)
    commit('setContent', content)
  },
}

export const getters = {
  getPost: (state) => (slug) => {
    return state.content.find((el) => el.slug === slug)
  },
  getPage: (state) => (pageNum) => {
    const index = (pageNum - 1) * 10
    return state.content.slice(index, index + 10)
  },
}
