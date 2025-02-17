<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const count = computed(() => store.state.count)

const increment = () => store.commit('increment')
const decrement = () => store.commit('decrement')
</script>

<template>
  <div>
    <h1>Contador: {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
