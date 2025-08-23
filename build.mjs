import StyleDictionary from 'style-dictionary'
import path from 'node:path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const base = path.resolve(__dirname)

StyleDictionary.registerTransform({
  type: 'name',
  transitive: true,
  name: 'name/kebab-custom',
  transform: function ({ path, name, value, type }, config) {
    const segments = path.map(part =>
      part
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .replace(/[^\w\s-]/g, '')
        .toLowerCase()
    )

    return segments.join('-')
  },
})

StyleDictionary.registerTransform({
  type: 'value',
  transitive: true,
  name: 'value/remove-blank',
  transform: function (token, config) {
    if (token.attributes.item === 'fontFamily') {
      return token.value.replace(/\s+/g, '')
    }

    return token.value
  },
})

const SD = new StyleDictionary({
  filter: {
    myFilter: function (token) {
      return token.attributes.category === 'color'
    },
  },
  source: [`${base}/tokens/tailwind/*.json`],
  platforms: {
    css: {
      transforms: [
        'attribute/cti',
        'name/kebab-custom',
        'value/remove-blank',
        'fontFamily/css',
        'size/px',
        'shadow/css/shorthand',
        'cubicBezier/css',
      ],
      filters: ['isColor'],
      buildPath: `${base}/src/styles/`,
      files: [
        {
          destination: `tailwind.css`,
          filter: function (token) {
            return typeof token.value !== `object`
          },
          format: 'css/variables',
          options: {
            selector: `@theme`,
          },
        },
      ],
    },
  },
  log: { verbosity: 'verbose' },
})
await SD.buildPlatform('css')
  .then(() => {
    console.log('✅ Build completed successfully')
  })
  .catch(error => {
    console.error('❌ Build failed:', error)
  })
