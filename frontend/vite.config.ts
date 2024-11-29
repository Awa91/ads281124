import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://github.com/Awa91/ads281124/blob/main/en-ns1.json',
        changeOrigin: true,
      },
    },
  },
})
