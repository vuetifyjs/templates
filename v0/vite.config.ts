import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import fonts from 'unplugin-fonts/vite'

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(), 
    unocss(), 
    fonts({
      google: {
        'families': ['Roboto:ital,wght@0,400;0,700;1,400;1,700']
      }
    })
  ],
})
