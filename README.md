# vue-liquid-glass

<div align="center">

**A beautiful Vue 3 component that creates a stunning liquid glass effect using SVG filters and backdrop blur. Perfect for modern, glassmorphic UI designs.**

[![npm version](https://img.shields.io/npm/v/@daisigu/vue-liquid-glass.svg)](https://www.npmjs.com/package/@daisigu/vue-liquid-glass)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js)](https://vuejs.org/)

**[🎨 Live Demo](https://vue-liquid-glass.netlify.app/)** | **[📦 npm](https://www.npmjs.com/package/@daisigu/vue-liquid-glass)** | **[📖 Documentation](#-quick-start)**

</div>

## ✨ Features

- 🎨 **Liquid Glass Effect** - Smooth, animated glass morphism with turbulence and displacement
- 🎯 **Fully Customizable** - Fine-tune blur, scale, frequency, and color channels
- 📦 **Lightweight** - Zero dependencies (except Vue 3)
- 🔧 **TypeScript Support** - Full TypeScript definitions included
- 🎭 **Flexible** - Render as any HTML element with the `as` prop
- 🌐 **SSR Compatible** - Works seamlessly with server-side rendering
- 🎪 **Interactive Demo** - [Try it live](https://vue-liquid-glass.netlify.app/) to see all possibilities

## 🚀 Quick Start

### Installation

Install the package using your preferred package manager:

```bash
npm install @daisigu/vue-liquid-glass
```

```bash
yarn add @daisigu/vue-liquid-glass
```

```bash
pnpm add @daisigu/vue-liquid-glass
```

### Basic Usage

```vue
<template>
  <VGlass>
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

### With Custom Props

```vue
<template>
  <VGlass 
    :blur="10" 
    :scale="30" 
    :base-frequency="0.015"
    class="glass-container"
  >
    <div class="card">
      <h2>Custom Glass Effect</h2>
      <p>Adjust the parameters to your liking</p>
    </div>
  </VGlass>
</template>

<script setup>
import { VGlass } from '@daisigu/vue-liquid-glass'
</script>
```

### Render as Different Element

```vue
<template>
  <VGlass as="section" :blur="15">
    <article>
      <h1>Article with Glass Effect</h1>
      <p>This is rendered as a section element</p>
    </article>
  </VGlass>
</template>
```

## 📖 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `string` | `"div"` | HTML tag to render as root element (e.g., `"div"`, `"section"`, `"article"`) |
| `blur` | `number` | `0` | CSS blur in pixels (backdrop-filter). Higher values create stronger glass effect |
| `scale` | `number` | `20` | Displacement strength. Higher values create more dramatic liquid distortion |
| `baseFrequency` | `number` | `0.01` | Turbulence frequency. Lower = smoother waves, higher = more chaotic patterns |
| `xChannelSelector` | `"R" \| "G" \| "B" \| "A"` | `"R"` | X axis color channel for displacement mapping |
| `yChannelSelector` | `"R" \| "G" \| "B" \| "A"` | `"G"` | Y axis color channel for displacement mapping |
| `numOctaves` | `number` | `2` | Turbulence detail level. Higher values add more detail and complexity |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Content to be displayed inside the glass effect container |

### Events

The component forwards all native events from the root element.

## 🎨 Examples

> 💡 **Tip**: Visit the [live demo](https://vue-liquid-glass.netlify.app/) to interactively explore different configurations and see real-time results!

### Subtle Glass Effect

Perfect for cards and subtle UI elements:

```vue
<template>
  <VGlass :blur="5" :scale="10" :base-frequency="0.005">
    <div class="subtle-glass">
      <h2>Subtle Glass Card</h2>
      <p>Perfect for elegant UI elements</p>
    </div>
  </VGlass>
</template>

<style scoped>
.subtle-glass {
  padding: 2rem;
  color: white;
  border-radius: 12px;
}
</style>
```

### Strong Liquid Effect

Dramatic liquid glass morphism for hero sections:

```vue
<template>
  <VGlass :blur="20" :scale="50" :base-frequency="0.02" :num-octaves="3">
    <div class="strong-glass">
      <h1>Dramatic Liquid Glass</h1>
      <p>Eye-catching hero section</p>
    </div>
  </VGlass>
</template>
```

### Smooth Glass Morphism

Balanced effect for modern interfaces:

```vue
<template>
  <VGlass :blur="15" :scale="15" :base-frequency="0.008" :num-octaves="1">
    <div class="smooth-glass">
      <h2>Smooth Glassmorphism</h2>
      <p>Perfect balance of style and readability</p>
    </div>
  </VGlass>
</template>
```

### Custom Element Rendering

Render as any HTML element:

```vue
<template>
  <VGlass as="section" :blur="12" class="hero-section">
    <header>
      <h1>Hero Section</h1>
      <p>Rendered as a semantic section element</p>
    </header>
  </VGlass>
</template>
```

## 💡 Tips & Best Practices

### Parameter Guidelines

- **Blur** (`blur`):
  - `5-15px` - Subtle glass effect, great for cards and overlays
  - `20-30px` - Strong glass effect, perfect for hero sections
  - `30px+` - Very strong effect, use sparingly for dramatic impact

- **Scale** (`scale`):
  - `10-20` - Subtle liquid distortions
  - `20-30` - Balanced effect (recommended starting point)
  - `30-50` - Dramatic liquid effects
  - `50+` - Extreme distortion, use with caution

- **Base Frequency** (`baseFrequency`):
  - `0.005-0.01` - Smooth, calm waves
  - `0.01-0.015` - Balanced patterns (default)
  - `0.02-0.03` - Chaotic, dynamic patterns

- **Num Octaves** (`numOctaves`):
  - `1` - Simple, smooth patterns
  - `2` - Balanced detail (default)
  - `3+` - High detail, more complex patterns

### Design Tips

- 🎨 **Background**: Works best with colorful or gradient backgrounds behind the component
- 🌈 **Color Channels**: Experiment with different channel selectors (`R`, `G`, `B`, `A`) for unique distortion patterns
- 📱 **Performance**: Higher `blur` and `numOctaves` values may impact performance on lower-end devices
- 🎯 **Contrast**: Ensure sufficient contrast between glass content and background for readability
- 🔄 **Animation**: Combine with CSS transitions for smooth parameter changes

## 🌐 Browser Support

This component uses `backdrop-filter` for the glass blur effect. Support includes:

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 76+ | Full support |
| Edge | 79+ | Full support |
| Safari | 9+ | Full support |
| Firefox | 103+ | Requires `-webkit-` prefix (handled automatically) |
| Opera | 63+ | Full support |

### Graceful Degradation

For older browsers that don't support `backdrop-filter`, the component will gracefully degrade:
- ✅ SVG displacement filter will still work
- ⚠️ Blur effect will be disabled
- ✅ Component remains fully functional

The component automatically handles vendor prefixes and fallbacks.

## 📝 TypeScript

Full TypeScript support is included out of the box. The package exports both the component and its type definitions:

```typescript
import { VGlass } from '@daisigu/vue-liquid-glass'
import type { VGlassProps } from '@daisigu/vue-liquid-glass'

// Use with type safety
const props: VGlassProps = {
  blur: 15,
  scale: 25,
  baseFrequency: 0.01
}
```

Type definitions are automatically included and don't require additional `@types` packages.

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Whether it's:

- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📝 Improving documentation
- 🔧 Submitting pull requests

Please feel free to open an issue or submit a Pull Request on [GitHub](https://github.com/Daisigu/vue-liquid-glass).

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 🔗 Links & Resources

- **[🎨 Live Demo](https://vue-liquid-glass.netlify.app/)** - Interactive demo with real-time examples
- **[📦 npm Package](https://www.npmjs.com/package/@daisigu/vue-liquid-glass)** - Install from npm
- **[🐙 GitHub Repository](https://github.com/Daisigu/vue-liquid-glass)** - Source code and issues
- **[📖 Vue 3 Documentation](https://vuejs.org/)** - Official Vue.js docs
- **[🎨 SVG Filters Reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)** - MDN SVG filters guide

---

<div align="center">

Made with ❤️ for the Vue community

**[⭐ Star this repo](https://github.com/Daisigu/vue-liquid-glass)** if you find it useful!

</div>
