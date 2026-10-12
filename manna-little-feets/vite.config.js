import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset paths work seamlessly across any static hosting
  server: {
    port: 5173,
    host: true,
  },
})
