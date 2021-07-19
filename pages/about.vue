<template>
  <article class="pt-32 about">
    <pre>{{ page }}</pre>
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('about').fetch()
    return { page }
  },
}
</script>
