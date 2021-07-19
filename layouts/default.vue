<template>
  <div class="wrapper">
    <top-bar />
    <main :class="{ open: isBarOpen }" class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    isBarOpen() {
      return this.$store.state.sidebar.isOpened
    },
  },
}
</script>
