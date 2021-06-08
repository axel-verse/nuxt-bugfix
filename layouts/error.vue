<template>
  <article>
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <NuxtLink to="/">
      <fa-icon icon="arrow-left" class="mr-2" />Вернуться на главную
    </NuxtLink>
  </article>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>

<style scoped lang="scss">
article {
  @apply flex flex-col justify-center items-center min-h-screen;

  h1 {
    @apply font-medium mb-4 text-4xl;
  }

  a {
    @apply uppercase hover:underline;
  }
}
</style>
