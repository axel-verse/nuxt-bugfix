<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('blog/init')
  },
  head: {
    titleTemplate: '%s - blog.axel-verse.ml',
  },
}
</script>
