import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: process.env.PORT || 10000,
    allowedHosts: ['employee-system-java-1.onrender.com']
  }
})
