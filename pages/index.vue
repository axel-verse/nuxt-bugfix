<template>
  <div
    class="grid grid-cols-3 grid-rows-2 gap-10 h-full auto-rows-max container mx-auto mt-10"
  >
    <div
      v-for="(el, i) in page"
      :key="i"
      class="bg-white bg-cover bg-center rounded-2xl flex flex-col justify-end cursor-pointer hover:bg-blue-100 transition duration-500 shadow overflow-hidden"
      :class="{ 'row-span-2 col-span-2 h-full': i === 0, 'h-96': i !== 0 }"
      :style="`background-image: url('${el.img}')`"
      @click="go(el.slug)"
    >
      <div
        class="flex-none p-4 rounded-b-2xl bg-white bg-opacity-75"
        style="backdrop-filter: blur(1rem)"
      >
        <div class="mb-4">
          {{ el.title }}
        </div>
        <div class="text-sm font-light tracking-wide max-h-20 overflow-hidden">
          {{ el.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    if (to.query && to.query.page && to.query.page === '1') {
      next('/')
    }

    next()
  },
  async asyncData({ $content, route }) {
    const pageContent = await $content('blog')
      .where({ promoted: true })
      .sortBy('createdAt', 'desc')
      .limit(6)
      .fetch()
    return { page: pageContent }
  },
  methods: {
    go(slug) {
      this.$router.push(`/posts/${slug}`)
    },
  },
  head: {
    title: 'Блог',
  },
}
</script>
