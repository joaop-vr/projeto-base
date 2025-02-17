<script setup lang="ts">
import PWABadge from './components/PWABadge.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/favicon.svg" class="logo" alt="my-vue-app logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <PWABadge />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
nav {
  margin-top: 1em;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #646cff;
}
</style>
