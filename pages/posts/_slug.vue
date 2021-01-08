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
      return this.$store.getters['blog/getPost'](this.$route.params.slug)
    },
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
