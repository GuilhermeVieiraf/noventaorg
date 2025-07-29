import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        contato: resolve(__dirname, 'src/pages/contato.html'),
        gallery: resolve(__dirname, 'src/pages/gallery.html'),
        premiere: resolve(__dirname, 'src/pages/premiere.html'),
        shop: resolve(__dirname, 'src/pages/shop.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  publicDir: '../public'
}) 