import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*
server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  }
 */
export default defineConfig({
  plugins: [react()],
  server : {
    host : true,
    strictPort : true,
    port : 5000,
  }
})
