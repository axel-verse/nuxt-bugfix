<template>
  <div v-if="post" class="post">
    <div class="post-img" :style="`background-image: url('${post.img}')`">
      <div class="post-img-heading">
        <h2 class="">{{ post.title }}</h2>
      </div>
    </div>
    <div class="container">
      <div class="post-dates">
        <div class="post-dates-created">
          <fa-icon icon="calendar-alt" class="mr-1" />
          {{ $moment(post.createdAt).format('dd, DD MMM YYYY, HH:mm:ss') }}
        </div>
        <div class="post-dates-updated">
          <fa-icon icon="edit" class="mr-1" />
          {{ $moment(post.updatedAt).format('dd, DD MMM YYYY, HH:mm:ss') }}
        </div>
      </div>
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<style lang="scss">
.post {
  @apply sm:mb-10;

  &-img {
    @apply h-96 w-full bg-cover bg-center bg-white flex items-center shadow;
    @apply sm:mb-10;

    &-heading {
      @apply p-4 bg-white bg-opacity-75 w-full text-center shadow;
      backdrop-filter: blur(8px);

      h2 {
        @apply text-2xl font-light tracking-tight;
        @apply sm:text-4xl;
      }
    }
  }

  .container {
    @apply mx-auto p-4 bg-white;
    @apply sm:rounded-xl;

    .post-dates {
      @apply text-gray-500 font-medium text-xs tracking-wide flex items-center justify-between flex-wrap mb-4;
      @apply sm:justify-start;

      &-updated,
      &-created {
        @apply flex-none;
      }

      &-created {
        @apply sm:mr-16;
      }
    }

    p:not(:last-child) {
      @apply mb-4;
    }
  }
}
</style>

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
