import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // supaya hasil build bisa ditaruh di folder/subfolder hosting mana pun
  plugins: [react(), tailwindcss()],
})
