<template>
  <pre>{{ page }}</pre>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('about').fetch()
    return { page }
  },
}
</script>
