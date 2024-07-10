import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ou qualquer nome de diretório desejado
  },
  base: '/',
  /* server: {
    port: 8000,
  }, */
})
