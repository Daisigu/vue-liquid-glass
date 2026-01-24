# vue-liquid-glass

<div align="center">

**Vue 3 component and directive for creating stunning liquid glass effect using SVG filters and backdrop blur**

[![npm version](https://img.shields.io/npm/v/@daisigu/vue-liquid-glass.svg)](https://www.npmjs.com/package/@daisigu/vue-liquid-glass)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js)](https://vuejs.org/)

**[🎨 Live Demo](https://vue-liquid-glass.netlify.app/)** | **[📦 npm](https://www.npmjs.com/package/@daisigu/vue-liquid-glass)** | **[🐙 GitHub](https://github.com/Daisigu/vue-liquid-glass)**

</div>

![Demo](demo-gif.gif)

## Installation

```bash
npm install @daisigu/vue-liquid-glass
```

```bash
yarn add @daisigu/vue-liquid-glass
```

```bash
pnpm add @daisigu/vue-liquid-glass
```

## Component Usage

```vue
<template>
  <VGlass :blur="10" :scale="30" :base-frequency="0.015">
    <div class="content">
      <h1>Glass Effect</h1>
      <p>Beautiful liquid glass morphism</p>
    </div>
  </VGlass>
</template>

<script setup>
import { VGlass } from '@daisigu/vue-liquid-glass'
</script>

<style scoped>
.content {
  padding: 2rem;
  color: white;
}
</style>
```

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `string` | `"div"` | HTML tag for root element |
| `blur` | `number` | `0` | CSS blur in pixels (backdrop-filter) |
| `scale` | `number` | `20` | Displacement strength |
| `baseFrequency` | `number` | `0.01` | Turbulence frequency |
| `xChannelSelector` | `"R" \| "G" \| "B" \| "A"` | `"R"` | X axis color channel for displacement |
| `yChannelSelector` | `"R" \| "G" \| "B" \| "A"` | `"G"` | Y axis color channel for displacement |
| `numOctaves` | `number` | `2` | Turbulence detail level |

## Directive Usage

### Directive Installation

```javascript
import { createApp } from 'vue'
import { vGlassDirective } from '@daisigu/vue-liquid-glass'

const app = createApp(App)
app.directive('liquid-glass', vGlassDirective)
app.mount('#app')
```

### Directive Configuration

You can configure default values when creating the directive:

```javascript
import { createApp } from 'vue'
import { createVGlassDirective } from '@daisigu/vue-liquid-glass'

const app = createApp(App)

// Create directive with custom default values
app.directive('liquid-glass', createVGlassDirective({
  blur: 10,
  scale: 30,
  baseFrequency: 0.015
}))

app.mount('#app')
```

### Using the Directive

```vue
<template>
  <!-- Without parameters (uses default values) -->
  <div v-liquid-glass class="glass-card">
    <h2>Glass Card</h2>
  </div>

  <!-- With configuration object -->
  <div v-liquid-glass="{ blur: 15, scale: 40, baseFrequency: 0.02 }" class="glass-card">
    <h2>Custom Glass Card</h2>
  </div>
</template>

<style scoped>
.glass-card {
  padding: 2rem;
  color: white;
  border-radius: 12px;
}
</style>
```

### Directive Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `blur` | `number` | `2` | CSS blur in pixels |
| `scale` | `number` | `40` | Displacement strength |
| `baseFrequency` | `number` | `0.01` | Turbulence frequency |
| `xChannelSelector` | `"R" \| "G" \| "B" \| "A"` | `"R"` | X axis color channel for displacement |
| `yChannelSelector` | `"R" \| "G" \| "B" \| "A"` | `"G"` | Y axis color channel for displacement |
| `numOctaves` | `number` | `2` | Turbulence detail level |

## Links

- **[🎨 Live Demo](https://vue-liquid-glass.netlify.app/)** - Interactive demonstration
- **[📦 npm Package](https://www.npmjs.com/package/@daisigu/vue-liquid-glass)** - Install from npm
- **[🐙 GitHub Repository](https://github.com/Daisigu/vue-liquid-glass)** - Source code and issues

## Contributing

Contributions are welcome! Whether it's:

- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📝 Improving documentation
- 🔧 Submitting pull requests

Please feel free to open an issue or submit a Pull Request on [GitHub](https://github.com/Daisigu/vue-liquid-glass).

## License

MIT
