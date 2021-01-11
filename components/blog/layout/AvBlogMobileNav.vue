<template>
  <transition name="drop-down-nav">
    <nav v-if="isMobileNavOpen" class="mobile-nav">
      <av-blog-header-nav />
    </nav>
  </transition>
</template>

<style lang="scss">
.mobile-nav {
  @apply fixed top-12 shadow w-full z-10 bg-white bg-opacity-75;
  backdrop-filter: blur(8px);

  .header-nav {
    @apply flex flex-col items-center;

    a,
    span {
      @apply p-2;
    }
  }
}
</style>

<script>
export default {
  name: 'AvBlogMobileNav',
  computed: {
    isMobileNavOpen() {
      return this.$store.state.mobileNav.status
    },
  },
  transition: 'drop-down-nav',
}
</script>
