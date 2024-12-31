import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from './viteAliasPaths';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: true,
  },
  ...alias,
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "${path.resolve(__dirname, 'src/assets/styles/mixins/index.scss')}" as *;`,
        additionalData: `@use "${path.resolve(__dirname, 'node_modules/@yk/styles/mixins/index.scss')}" as *;`,
      },
    }
  }
});
