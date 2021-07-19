<template>
  <section v-if="data.length" class="front-frameworks">
    <div>
      <h3><slot></slot></h3>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-y-16">
        <template v-for="el in data">
          <div :key="el.logo" class="flex items-center justify-center">
            <component :is="`icon-${el.logo}`" class="w-auto h-32" />
          </div>
          <div :key="el.title" class="lg:col-span-2">
            <h4 class="mb-4 text-xl font-medium">
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
