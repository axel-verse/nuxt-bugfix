<template>
  <transition name="drop-down-nav">
    <nav v-if="isMobileNavOpen" class="mobile-nav">
      <blog-layout-av-blog-header-nav />
    </nav>
  </transition>
</template>

<script>
export default {
  name: 'AvBlogMobileNav',
  transition: 'drop-down-nav',
  computed: {
    isMobileNavOpen() {
      return this.$store.state.mobileNav.status
    },
  },
}
</script>

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
