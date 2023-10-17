import { defineConfig } from 'vite'
import VueImages from 'vite-plugin-vue-images';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VueImages()
  ],
  base: "/techland-store/",
  
})
