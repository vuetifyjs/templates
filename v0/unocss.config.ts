import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif'
    },
  },
})
