export default function (to, from, savedPosition) {
  // return { x: 0, y: 0 }

  const nuxt = window['<%= globals.nuxt %>']

  if (to.path === from.path) {
    return
  }
  if (to.hash) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          selector: to.hash,
        })
      }, 500)
    })
  }

  const position = savedPosition || { x: 0, y: 0 }
  return new Promise((resolve, reject) => {
    nuxt.$root.$once('triggerScroll', () => {
      nuxt.$nextTick(() => {
        resolve(position)
      })
    })
  })
}
