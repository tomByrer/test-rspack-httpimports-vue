import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'

export default {
  experiments: {
    buildHttp: {
      allowedUris: ['https://esm.sh/'],
    },
  },
  plugins: [pluginVue()],
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.js',
    },
  },
}
