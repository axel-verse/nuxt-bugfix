<template>
  <div class="promoted-wrapper">
    <div
      v-for="(el, i) in page"
      :key="i"
      class="promoted"
      :class="{ 'promoted-main': i === 0 }"
      @click="go(el.slug)"
    >
      <picture class="object-cover absolute h-full w-full" loading="lazy">
        <source
          v-for="bp in bpList"
          :key="bp.title"
          :media="`(min-width: ${bp.minWidth})`"
          :srcset="`/img/blog/${bp.title}${
            i === 0 && bp.title !== 'sm' ? '/promoted' : ''
          }/${el.img}`"
        />
        <img :src="`/img/blog/${el.img}`" :alt="el.title" />
      </picture>
      <div class="promoted-description">
        <div class="promoted-description-title">
          {{ el.title }}
        </div>
        <div class="promoted-description-text">
          {{ el.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.promoted-wrapper {
  @apply grid grid-cols-1 gap-10 h-full my-10 w-11/12 mx-auto;
  @apply md:grid-cols-3 md:grid-rows-3 xl:w-2/3;

  .promoted {
    @apply bg-white rounded-2xl cursor-pointer hover:bg-blue-100 relative;
    @apply transition duration-500 shadow overflow-hidden w-full h-0 pb-full;
    @apply hover:ring hover:ring-blue-300 relative;

    &.promoted-main {
      @apply sm:row-span-2 sm:col-span-2;
    }

    &-description {
      @apply absolute bottom-0 p-4 rounded-b-2xl bg-white bg-opacity-75;
      backdrop-filter: blur(1rem);

      &-title {
        @apply mb-4;
      }

      &-text {
        @apply text-sm font-light tracking-wide max-h-20 overflow-hidden;
      }
    }
  }
}
</style>

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
  computed: {
    bpList() {
      return this.$store.state.breakpoints.bpList
    },
  },
  methods: {
    go(slug) {
      this.$router.push(`/posts/${slug}`)
    },
  },
  head() {
    return {
      title: 'Блог',
      link: this.pageContent
        ? this.pageContent.map((el) => {
            return { rel: 'preload', href: el.img, as: 'image' }
          })
        : null,
    }
  },
}
</script>
