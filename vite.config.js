import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://MisterHood100.github.io/monument-comics",
  plugins: [react()],
})
