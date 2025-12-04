# vue-liquid-glass

A beautiful Vue 3 component that creates a stunning liquid glass morphism effect using SVG filters and backdrop blur. Perfect for modern, glassmorphic UI designs.

## ✨ Features

- 🎨 **Liquid Glass Effect** - Smooth, animated glass morphism with turbulence and displacement
- 🎯 **Fully Customizable** - Fine-tune blur, scale, frequency, and color channels
- 📦 **Lightweight** - Zero dependencies (except Vue 3)
- 🔧 **TypeScript Support** - Full TypeScript definitions included
- 🎭 **Flexible** - Render as any HTML element
- ⚡ **Performance** - Optimized with Vue 3 Composition API

## 📦 Installation

```bash
npm install @daisigu/vue-liquid-glass
```

or

```bash
yarn add @daisigu/vue-liquid-glass
```

or

```bash
pnpm add @daisigu/vue-liquid-glass
```

## 🚀 Quick Start

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
| `as` | `string` | `"div"` | HTML tag to render as root element |
| `blur` | `number` | `0` | CSS blur in pixels (backdrop-filter) |
| `scale` | `number` | `20` | Displacement strength (higher = more distortion) |
| `baseFrequency` | `number` | `0.01` | Turbulence frequency (lower = smoother, higher = more chaotic) |
| `xChannelSelector` | `"R" \| "G" \| "B" \| "A"` | `"R"` | X axis color channel for displacement |
| `yChannelSelector` | `"R" \| "G" \| "B" \| "A"` | `"G"` | Y axis color channel for displacement |
| `numOctaves` | `number` | `2` | Turbulence detail level (higher = more detail) |

### Slots

- `default` - Content to be displayed inside the glass effect container

## 🎨 Examples

### Subtle Glass Effect

```vue
<VGlass :blur="5" :scale="10" :base-frequency="0.005">
  <div class="subtle-glass">Subtle effect</div>
</VGlass>
```

### Strong Liquid Effect

```vue
<VGlass :blur="20" :scale="50" :base-frequency="0.02" :num-octaves="3">
  <div class="strong-glass">Strong liquid effect</div>
</VGlass>
```

### Smooth Glass Morphism

```vue
<VGlass :blur="15" :scale="15" :base-frequency="0.008" :num-octaves="1">
  <div class="smooth-glass">Smooth glassmorphism</div>
</VGlass>
```

## 💡 Tips

- **Blur**: Start with `5-15px` for a subtle effect, `20-30px` for a stronger glass effect
- **Scale**: Lower values (10-20) create subtle distortions, higher values (30-50) create more dramatic liquid effects
- **Base Frequency**: Lower values (0.005-0.01) create smoother waves, higher values (0.02-0.03) create more chaotic patterns
- **Color Channels**: Experiment with different channel selectors (`R`, `G`, `B`, `A`) for different distortion patterns
- **Background**: Works best with colorful or gradient backgrounds behind the component

## 🌐 Browser Support

This component uses `backdrop-filter` which is supported in:
- Chrome 76+
- Edge 79+
- Safari 9+
- Firefox 103+ (with `-webkit-` prefix)

For older browsers, the component will gracefully degrade (the blur effect may not work, but the displacement will still function).

## 📝 TypeScript

Full TypeScript support is included. Import the component and its types:

```typescript
import { VGlass } from '@daisigu/vue-liquid-glass'
import type { VGlassProps } from '@daisigu/vue-liquid-glass'
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT

## 🔗 Links

- [Vue 3 Documentation](https://vuejs.org/)
- [SVG Filters Reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)

---

Made with ❤️ for the Vue community
