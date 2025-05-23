import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'es2015'
  }
});
