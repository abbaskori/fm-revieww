import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: './index.html',
        simple_review_page: './simple_review_page.html',
        qr_code_generator: './qr_code_generator.html',
        apple_review_system: './apple_review_system.html'
      }
    }
  }
})
