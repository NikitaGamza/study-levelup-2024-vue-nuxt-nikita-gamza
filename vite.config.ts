import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5172,
    https: {
      key: './study-levelup-2024-vue-nuxt-nikita-gamza-privateKey.key',
      cert: './study-levelup-2024-vue-nuxt-nikita-gamza.crt',
    },
  },
});
