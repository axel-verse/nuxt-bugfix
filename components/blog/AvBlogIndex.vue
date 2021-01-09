<template>
  <div v-if="data">
    <h3>{{ data.title }}</h3>
    <p>{{ data.slug }}</p>
    <p>{{ data.description }}</p>
    <nuxt-link :to="`/posts/${data.slug}`"> MORE </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AvBlogIndex',
  props: { data: Object },
}
</script>
