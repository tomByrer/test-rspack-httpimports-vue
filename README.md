# test-rspack-httpimports-vue

## [Bug Report](https://github.com/web-infra-dev/rspack/issues/9867):

[Rspack has a new http import feature](https://rspack.dev/blog/announcing-1-3#build-http-imports), but seems semi-buggy.

Works the same on [jsDelivr CDN](https://www.jsdelivr.com/package/npm/vue) (ESM import) & esm.sh;
the main `App.vue` loads, which imports `./components/HelloWorld.vue` as expected.
But `./components/TheWelcome.vue` does not import/display when http imported,
but does work when imported from `node_modules`.

### `import { createApp } from 'vue'`

![](import-node_modules.avif "import-node_modules")

### `import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3.5.13/+esm'`

![](import-jsdelivr.avif "import-jsdelivr")
* also with `import { createApp } from 'https://esm.sh/vue'`


## Second Bug:

Also, this config does not seem to be needed right now:
```js
  experiments: {
    buildHttp: {
      allowedUris: ['https://esm.sh/'],
    },
  },
  ```

## Directions:

How I got here:
1. installed vue expample project via vite
2. added Rspack via their docs' [Vite directions](https://rsbuild.dev/guide/migration/vite)
3. hand-edited `./src/main.js` imports.

How you can test
1. `bun i`
2. `bun dev`
3. comment/uncomment the first few `import` lines in `./src/main.js`

best wishes!
