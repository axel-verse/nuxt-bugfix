<template>
  <div v-if="page && page.length && page.length >= 1">
    <av-blog-index v-for="el in page" :key="el.slug" :data="el" />
    <av-blog-paginator />
  </div>
</template>

<script>
import AvBlogIndex from '@/components/blog/AvBlogIndex'
import AvBlogPaginator from '@/components/blog/AvBlogPaginator'

export default {
  components: { AvBlogPaginator, AvBlogIndex },
  beforeRouteEnter(to, from, next) {
    if (to.query && to.query.page && to.query.page === '1') {
      next('/')
    }

    next()
  },
  computed: {
    page() {
      return this.$store.getters['blog/getPage'](this.currentPageNumber) || null
    },
    currentPageNumber() {
      return parseInt(this.$route.query.page) || 1
    },
    maxPages() {
      return this.$store.state.blog.maxPages
    },
  },
  watch: {
    maxPages(n) {
      if (this.currentPageNumber > n) {
        this.$router.push('/')
      }
    },
  },
  head: {
    title: 'Блог',
  },
}
</script>
