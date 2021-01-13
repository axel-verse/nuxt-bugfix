<template>
  <div class="wrapper">
    <av-blog-header />
    <av-blog-mobile-nav />
    <main>
      <transition name="page" mode="out-in" appear>
        <Nuxt :key="$route.fullPath" />
      </transition>
    </main>
    <footer>
      &copy; <nuxt-link to="/">axel-verse.ml</nuxt-link>, 2021. Made with
      <a href="https://nuxtjs.org" target="_blank">NuxtJS</a>
    </footer>
  </div>
</template>

<style lang="scss">
.wrapper {
  @apply flex flex-col min-h-screen bg-gray-200;
  // background-image: url('/img/circuit-board.svg');

  main {
    @apply flex-1;
  }

  footer {
    @apply text-center text-xs tracking-wide text-gray-700 font-light;

    a {
      @apply font-medium underline uppercase;
    }
  }
}
</style>

<script>
import AvBlogHeader from '@/components/blog/layout/AvBlogHeader'
import AvBlogMobileNav from '@/components/blog/layout/AvBlogMobileNav'

export default {
  components: { AvBlogMobileNav, AvBlogHeader },
  head: {
    titleTemplate: '%s - blog.axel-verse.ml',
  },
}
</script>
