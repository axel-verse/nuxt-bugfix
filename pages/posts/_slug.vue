<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters['blog/getPost'](this.slug)
    },
    slug() {
      return this.$route.params.slug
    },
  },
  watch: {
    post(n) {
      if (!n) {
        this.$router.push('/')
      }
    },
  },
  mounted() {
    if (!this.slug) {
      this.$router.push('/')
    }
  },
  head() {
    return {
      title: this.post && this.post.title ? this.post.title : null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.post && this.post.description ? this.post.description : null,
        },
      ],
    }
  },
}
</script>
