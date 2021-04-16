<template>
  <div class="background">
    <div class="foreground">
      <section>
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  @apply h-screen w-full relative bg-cover bg-center bg-no-repeat overflow-hidden bg-black;

  @supports (background-image: url('~static/img/bg-sq.webp')) {
    background-image: url('~static/img/bg-sq.webp');
  }

  @supports not (background-image: url('~static/img/bg-sq.webp')) {
    background-image: url('~static/img/bg-sq.jpg');
  }

  .foreground {
    @apply absolute top-0 left-0 w-full h-full bg-gradient-to-b via-transparent from-black to-black;
    @apply flex flex-col items-center justify-center text-yellow-500;

    section {
      @apply bg-black bg-opacity-60 w-full p-4 text-center;
      animation: slideFromLeft 1s;

      h1 {
        @apply text-6xl font-thin;
      }

      p {
        @apply text-2xl font-light;
      }

      h1,
      p {
        @apply text-white;
        animation: slideFromRight 1s;
      }
    }
  }
}

@screen lg {
  .background {
    @supports (background-image: url('~static/img/bg.webp')) {
      background-image: url('~static/img/bg.webp');
    }

    @supports not (background-image: url('~static/img/bg.webp')) {
      background-image: url('~static/img/bg.jpg');
    }
  }
}
</style>
