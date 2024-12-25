import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from './viteAliasPaths';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: true,
  },
  ...alias,
});
