<template>
  <div v-if="data.length >= 1">
    <av-blog-index v-for="el in data" :key="el.slug" :data="el" />
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
  data() {
    return {
      isMoreOpened: false,
    }
  },
  computed: {
    data() {
      return this.$store.getters['blog/getPage'](this.$route.query.page || 1)
    },
  },
  head: {
    title: 'Блог',
  },
}
</script>
