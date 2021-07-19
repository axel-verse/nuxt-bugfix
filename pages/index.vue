<template>
  <article class="index">
    <section class="min-h-screen bg-black">
      <fullscreen-slide>
        <p>Web-дизайнер, web-программист</p>
        <h1 class="mt-4 mb-6">
          Александр
          <span class="hidden">"axel_verse"</span>
          Мудров
        </h1>
        <p>Разработка сайтов любой сложности</p>
      </fullscreen-slide>
    </section>

    <front-frameworks :data="frontend" class="frontend">
      Frontend | Интерфейс пользователя
    </front-frameworks>

    <front-frameworks :data="backend" class="backend">
      Backend | Серверные приложения
    </front-frameworks>
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const frontend = await $content('front/frontend').fetch()
    const backend = await $content('front/backend').fetch()
    return { frontend, backend }
  },
  head: {
    title: 'Главная',
  },
}
</script>
