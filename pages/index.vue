<template>
  <article>
    <div class="min-h-screen bg-black">
      <fullscreen-slide>
        <p>Web-дизайнер, web-программист</p>
        <h1 class="mb-8">Александр "axel_verse" Мудров</h1>
        <p>Визитка и примеры работ</p>
      </fullscreen-slide>
    </div>
    <section class="tools">
      <h2>Инструментарий</h2>
      <div class="icons">
        <div class="large-icon">
          <icon-laravel class="h-32 w-auto" />
        </div>
        +
        <div class="large-icon">
          <icon-nuxt class="h-32 w-auto" />
        </div>
        =
        <div class="large-icon">
          <fa-icon icon="heart" class="text-8xl text-red-600" />
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
section {
  @apply py-16 mx-auto w-11/12 lg:w-1000 text-gray-700;

  .large-icon {
    @apply h-48 w-48 flex items-center justify-center rounded-full border border-gray-100 leading-none shadow;
  }

  h2 {
    @apply text-center text-4xl font-light mb-16 pb-2 border-b border-gray-300;
  }

  &.tools {
    .icons {
      @apply flex items-center justify-evenly space-x-4 text-8xl font-thin text-gray-400 mb-16;
    }
  }
}
</style>
