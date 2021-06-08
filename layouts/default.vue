<template>
  <div class="wrapper">
    <top-bar />
    <main :class="{ open: isBarOpen }">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    isBarOpen() {
      return this.$store.state.sidebar.isOpened
    },
  },
}
</script>

<style lang="scss">
// @import '~assets/fonts/fonts.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  @apply bg-black;

  .wrapper {
    @apply w-screen lg:w-full overflow-hidden lg:overflow-auto;

    .prose {
      @apply max-w-full;
    }
  }
}

.page-enter-active,
.page-leave-active {
  @apply transition-all duration-500;
}
.page-enter,
.page-leave-to {
  @apply opacity-0;
}

.drop-down-nav-enter-active,
.drop-down-nav-leave-active {
  @apply transition-all duration-500;
}
.drop-down-nav-enter,
.drop-down-nav-leave-to {
  @apply transform -translate-y-full opacity-0 ease-linear;
}

@keyframes slideFromTop {
  0%,
  50% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes slideFromBottom {
  0%,
  50% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes slideFromLeft {
  0%,
  50% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  0%,
  50% {
    transform: translateX(200%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>

<style scoped lang="scss">
main {
  @apply transition-all duration-500 h-screen lg:h-auto overflow-auto;

  &.open {
    @apply transform scale-75 translate-x-3/4 overflow-hidden transition-all duration-500;
  }
}
</style>
