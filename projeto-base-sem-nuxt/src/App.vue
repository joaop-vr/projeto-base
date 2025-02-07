<template>
  <div class="bg-blue-600 text-white p-4" role="banner">
    Hello, Tailwind CSS!
  </div>

  <h1 class="text-xl font-bold underline" role="heading" aria-level="1">
    Hello world!!
  </h1>

  <button
    class="mt-4 bg-green-600 text-white px-4 py-2 rounded"
    aria-label="Enviar formulário"
  >
    Enviar
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
</style>
