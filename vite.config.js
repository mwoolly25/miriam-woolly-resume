// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Use different base depending on mode
export default defineConfig(({ mode }) => ({
  base: mode === 'github' ? '/miriam-woolly-resume/' : '/',
  plugins: [vue()],
}))
