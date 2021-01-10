<template>
  <div class="wrapper">
    <header>
      <div
        class="rounded-full h-10 w-10 mr-4 overflow-hidden border-4 text-gray-700 border-gray-700 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-10 w-10 flex-grow-0 flex-shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <h1 class="mr-auto">AXEL-VERSE.ML</h1>
      <nuxt-link to="/" class="mr-12">ГЛАВНАЯ</nuxt-link>
      <span class="mr-12">БЛОГ</span>
      <span>ОБО МНЕ</span>
    </header>
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
  @apply flex flex-col min-h-screen bg-gray-100;

  header,
  footer {
    @apply h-12 p-4 bg-white;
  }

  header {
    @apply flex items-center shadow sticky top-0 z-20 bg-white bg-opacity-75;
    backdrop-filter: blur(8px);

    h1 {
      @apply font-thin text-2xl;
    }

    span,
    a {
      @apply font-light tracking-wide;
    }
  }

  main {
    @apply flex-1 mb-10;
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
export default {
  head: {
    titleTemplate: '%s - blog.axel-verse.ml',
  },
}
</script>
