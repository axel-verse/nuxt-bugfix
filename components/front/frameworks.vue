<template>
  <section v-if="data.length">
    <div>
      <h3><slot></slot></h3>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-y-16">
        <template v-for="el in data">
          <div :key="el.logo" class="flex items-center justify-center">
            <component :is="`icon-${el.logo}`" class="h-32 w-auto" />
          </div>
          <div :key="el.title" class="lg:col-span-2">
            <h4 class="text-xl font-medium mb-4">
              {{ el.title }}<fa-icon :icon="['fab', el.icon]" class="ml-2" />
            </h4>
            <nuxt-content :document="el" class="prose" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
section {
  @apply text-gray-700;

  & > div {
    @apply py-16 mx-auto w-11/12 lg:w-1000;
  }

  h3 {
    @apply text-center text-4xl font-light mb-16 pb-2 border-b border-gray-300;
  }
}
</style>
