import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // ou qualquer nome de diretório desejado
  },
  /* server: {
    port: 8000,
  }, */
})
