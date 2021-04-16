<template>
  <div class="wrapper">
    <top-bar />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss">
@import '~assets/fonts/fonts.scss';

body {
  font-family: 'Roboto', sans-serif;
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
