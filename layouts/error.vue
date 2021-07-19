<template>
  <article class="error">
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
