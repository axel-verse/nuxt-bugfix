<template>
  <header :class="{ open: isBarOpen }">
    <nav>
      <ul>
        <li class="site-name">
          <nuxt-link to="/" @click.native="closeBar">axel_verse</nuxt-link>
        </li>
        <li v-if="!isBarOpen" class="menu">
          <fa-icon icon="bars" @click="toggleBar" />
        </li>
        <li>
          <nuxt-link to="/" @click.native="closeBar">Главная</nuxt-link>
        </li>
        <li>
          <a href="javascript:void(0);" @click="closeBar">Примеры работ</a>
        </li>
        <li>
          <nuxt-link to="/about" @click.native="closeBar">Обо мне</nuxt-link>
        </li>
        <li>
          <a href="javascript:void(0);" @click="closeBar">Контакты</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isBarOpen() {
      return this.$store.state.sidebar.isOpened
    },
  },
  methods: {
    closeBar() {
      this.$store.commit('sidebar/closeBar')
    },
    toggleBar() {
      this.$store.commit('sidebar/toggleBar')
    },
  },
}
</script>

<style scoped lang="scss">
header {
  @apply fixed top-0 left-0 w-full h-16 bg-black text-yellow-500 z-10 bg-opacity-75 backdrop-filter backdrop-blur;
  animation: slideFromTop 1s;

  &.open {
    @apply w-3/4 h-screen bg-transparent backdrop-blur-0;

    nav ul {
      @apply flex-col items-stretch;

      li {
        @apply h-16;

        &:not(.site-name) {
          @apply flex;

          a {
            @apply w-full;
          }
        }

        &.site-name {
          @apply items-start;

          a {
            @apply h-16;
          }
        }

        .menu {
          @apply hidden;
        }
      }
    }
  }

  nav {
    @apply h-full w-full;

    ul {
      @apply h-full w-full flex items-center;

      li {
        @apply first:flex-grow first:uppercase first:font-medium h-full;

        &:not(.site-name) {
          @apply hidden lg:flex lg:last:mr-4;

          .nuxt-link-exact-active {
            @apply text-black bg-yellow-500;
          }
        }

        &:not(.site-name):not(.menu) {
          animation: slideFromLeft 500ms;
        }

        a,
        &.menu {
          @apply h-full px-4 flex items-center hover:text-white;
          @apply transition-colors duration-500;
        }

        &.menu {
          @apply lg:hidden;

          svg {
            @apply text-4xl;
          }
        }
      }
    }
  }
}
</style>
