<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from '../stores/index'

const store = useCounterStore()

const count = computed(() => store.count)

const increment = () => store.increment()
const decrement = () => store.decrement()
</script>

<template>
  <div>
    <h1>Contador: {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
