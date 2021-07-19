<template>
  <header :class="{ open: isBarOpen }" class="navbar-container">
    <nav>
      <ul>
        <li class="site-name">
          <nuxt-link to="/" @click.native="closeBar">axel_verse</nuxt-link>
        </li>
        <li v-if="!isBarOpen" class="menu">
          <fa-icon icon="bars" @click="toggleBar" />
        </li>
        <li>
          <nuxt-link to="/" @click.native="closeBar">Главная</nuxt-link>
        </li>
        <li>
          <a href="javascript:void(0);" @click="closeBar">Примеры работ</a>
        </li>
        <li>
          <nuxt-link to="/about" @click.native="closeBar">Обо мне</nuxt-link>
        </li>
        <li>
          <a href="javascript:void(0);" @click="closeBar">Контакты</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isBarOpen() {
      return this.$store.state.sidebar.isOpened
    },
  },
  methods: {
    closeBar() {
      this.$store.commit('sidebar/closeBar')
    },
    toggleBar() {
      this.$store.commit('sidebar/toggleBar')
    },
  },
}
</script>
