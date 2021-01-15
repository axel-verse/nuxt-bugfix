<template>
  <header>
    <button
      class="header-nav-toggle"
      @click="toggleMobileNav"
      @blur="onLoseNavFocus"
    >
      <fa-icon icon="bars" />
    </button>
    <div class="header-logo">
      <img src="/img/users.svg" class="small-logo" />
      <nuxt-link to="/">
        <img src="/img/logo.svg" alt="AXEL-VERSE.ML" class="large-logo" />
      </nuxt-link>
    </div>
    <av-blog-header-nav />
  </header>
</template>

<style lang="scss">
header {
  @apply flex items-center justify-between shadow sticky top-0 z-20 bg-white bg-opacity-75 h-12;
  backdrop-filter: blur(8px);

  .header-nav-toggle {
    @apply rounded shadow px-2 focus:ring-2 focus:ring-gray-700 text-gray-700;
    @apply md:hidden;
  }

  .header-logo,
  .header-nav {
    @apply items-center;
  }

  .header-logo {
    @apply flex;

    .small-logo {
      @apply hidden rounded-full h-10 w-10 border-4 border-gray-700 text-gray-700 stroke-current mr-auto;
      @apply sm:mr-4 sm:block;
    }

    .large-logo {
      @apply h-5 md:h-8 w-auto;
    }

    h1 {
      @apply font-thin text-2xl;
      @apply sm:text-4xl;

      font-family: 'Saucer BB', serif;
    }
  }

  .header-nav {
    @apply hidden;
    @apply md:flex;

    span,
    a {
      @apply font-light tracking-wide;

      &:not(:last-child) {
        @apply mr-4 lg:mr-12;
      }
    }
  }
}
</style>

<script>
import AvBlogHeaderNav from '@/components/blog/layout/AvBlogHeaderNav'

export default {
  name: 'AvBlogHeader',
  components: { AvBlogHeaderNav },
  methods: {
    toggleMobileNav() {
      this.$store.commit('mobileNav/toggle')
    },
    onLoseNavFocus() {
      this.$store.commit('mobileNav/close')
    },
  },
}
</script>
