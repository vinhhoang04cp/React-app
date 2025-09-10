import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap-icons/font/bootstrap-icons.css";`
      }
    }
  }
})
