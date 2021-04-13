<template>
  <div>
    <button :disabled="!canMoveLeft" @click="moveFirst">&lt;&lt;&lt;</button>
    <button :disabled="!canMoveLeft" @click="movePrevious">&lt;</button>
    <span>{{ paginatorCurrent }}</span>
    <button :disabled="!canMoveRight" @click="moveNext">&gt;</button>
    <button :disabled="!canMoveRight" @click="moveLast">&gt;&gt;&gt;</button>
  </div>
</template>

<script>
export default {
  name: 'AvBlogPaginator',
  computed: {
    paginatorCurrent() {
      return parseInt(this.$route.query.page) || 1
    },
    maxPages() {
      return this.$store.state.blog.maxPages
    },
    paginatorPrevious() {
      return this.paginatorCurrent > 2
        ? `/?page=${this.paginatorCurrent - 1}`
        : '/'
    },
    paginatorLast() {
      return `/?page=${this.maxPages}`
    },
    paginatorNext() {
      return this.canMoveRight
        ? `/?page=${this.paginatorCurrent + 1}`
        : this.paginatorLast
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
