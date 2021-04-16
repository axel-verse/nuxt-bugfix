<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">axel_verse</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Главная</nuxt-link>
        </li>
        <li>
          <a href="javascript:void(0)">Примеры работ</a>
        </li>
        <li>
          <nuxt-link to="/about">Обо мне</nuxt-link>
        </li>
        <li>
          <a href="javascript:void(0)">Контакты</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  @apply fixed top-0 left-0 w-full h-16 bg-black text-yellow-500 z-10 bg-opacity-75;
  animation: slideFromTop 1s;
  backdrop-filter: blur(8px);

  nav {
    @apply h-full w-full;

    ul {
      @apply h-full w-full flex items-center;

      li {
        @apply first:mr-auto first:uppercase first:font-medium h-full;

        a {
          @apply h-full px-4 flex items-center hover:text-white transition-colors duration-500;
        }

        &:not(:first-child) {
          .nuxt-link-active {
            @apply text-black bg-yellow-500;
          }
        }
      }
    }
  }
}
</style>
