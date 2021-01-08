<template>
  <div>
    <button :disabled="!canMoveLeft" @click="moveFirst">&lt;&lt;&lt;</button>
    <button :disabled="!canMoveLeft" @click="movePrevious">&lt;</button>
    <span>{{ paginatorCurrent }}</span>
    <button :disabled="!canMoveRight" @click="moveNext">&gt;</button>
    <button :disabled="!canMoveRight" @click="moveLast">&gt;&gt;&gt;</button>
  </div>
</template>

<style lang="scss" scoped>
button {
  @apply disabled:cursor-not-allowed disabled:text-gray-300 disabled:bg-gray-500;
}
</style>

<script>
export default {
  name: 'AvBlogPaginator',
  computed: {
    paginatorCurrent() {
      return this.$route.query.page || 1
    },
    maxPages() {
      return this.$store.state.blog.maxPages
    },
    paginatorPrevious() {
      return this.canMoveLeft ? '/' : `/?page=${this.paginatorCurrent - 1}`
    },
    paginatorLast() {
      return this.canMoveRight ? `/?page=${this.maxPages}` : null
    },
    paginatorNext() {
      return this.canMoveRight
        ? this.paginatorLast
        : `/?page=${this.paginatorCurrent + 1}`
    },
    canMoveLeft() {
      return this.paginatorCurrent >= 2
    },
    canMoveRight() {
      return this.paginatorCurrent <= this.maxPages - 1
    },
  },
  methods: {
    moveFirst() {
      if (this.canMoveLeft) {
        this.$router.push('/')
      }
    },
    movePrevious() {
      if (this.canMoveLeft) {
        this.$router.push(this.paginatorPrevious)
      }
    },
    moveNext() {
      if (this.canMoveRight) {
        this.$router.push(this.paginatorNext)
      }
    },
    moveLast() {
      if (this.canMoveRight) {
        this.$router.push(this.paginatorLast)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
button {
  @apply disabled:cursor-not-allowed disabled:text-gray-300 disabled:bg-gray-500;
}
</style>
