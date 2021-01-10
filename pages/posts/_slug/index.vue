<template>
  <div v-if="post">
    <div
      class="h-96 w-full bg-cover bg-center bg-white mb-8 flex items-center shadow"
      :style="`background-image: url('${post.img}')`"
    >
      <div
        class="p-4 bg-white bg-opacity-75 w-full text-center shadow"
        style="backdrop-filter: blur(8px)"
      >
        <h2 class="text-3xl font-light">{{ post.title }}</h2>
      </div>
    </div>
    <nuxt-content :document="post" class="container mx-auto" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    const slug = params.slug
    const pageContent = await $content('blog', slug)
      .fetch()
      .catch(() => {
        redirect(302, '/')
      })
    return { post: pageContent }
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
