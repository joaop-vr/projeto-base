import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate', // Atualiza automaticamente o service worker
      manifest: {
        name: 'Seu App',
        short_name: 'App',
        description: 'Descrição do seu PWA',
        theme_color: '#1e40af', // Cor do tema (ajuste conforme sua preferência)
        background_color: '#ffffff', // Cor de fundo
        display: 'standalone',
        scope: './',
        start_url: './',
        icons: [
          {
            src: 'img/icons/android-chrome-192x192.png', // Ícone 192x192
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'img/icons/android-chrome-512x512.png', // Ícone 512x512
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'img/icons/android-chrome-maskable-192x192.png', // Ícone maskable 192x192
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable', // Indica que é um ícone adaptável
          },
          {
            src: 'img/icons/android-chrome-maskable-512x512.png', // Ícone maskable 512x512
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable', // Indica que é um ícone adaptável
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});