<template>
  <div class="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
    <h1 class="text-2xl font-bold mb-4" >
      Bem-vindo ao Projeto Base
    </h1>
    <p class="text-lg text-gray-300 mb-6 text-center">
      Esta é uma aplicação PWA desenvolvida com Vue 3, TypeScript e Tailwind CSS.
    </p>
    <button
      class="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      
      @click="showMessage"
    >
      Saiba mais
    </button>
    <p v-if="message" class="mt-4 text-green-400">:)</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const message = ref(false);
    const showMessage = () => {
      message.value = !message.value;
    };
    return { message, showMessage };
  },
});
</script>

<style scoped>
</style>