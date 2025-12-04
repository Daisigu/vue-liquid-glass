<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { VGlassProps } from "./types";

const props = withDefaults(defineProps<VGlassProps>(), {
  as: "div",
  blur: 0,
  scale: 20,
  baseFrequency: 0.01,
  xChannelSelector: "R",
  yChannelSelector: "G",
  numOctaves: 2,
});

const isClient = ref(false);
const filterId = ref<string>("");

onMounted(() => {
  isClient.value = true;
  filterId.value = `vglass-${Math.random().toString(36).slice(2, 9)}`;
});

const styles = computed(() => {
  if (!isClient.value || !filterId.value) {
    return {};
  }

  const value = `url(#${filterId.value}) blur(${props.blur}px)`;

  return {
    backdropFilter: value,
    WebkitBackdropFilter: value,
  };
});
</script>

<template>
  <component :is="as" v-bind="$attrs" :style="styles">
    <slot />
    <svg
      v-if="isClient"
      style="display: none"
      aria-hidden="true"
      focusable="false"
    >
      <filter :id="filterId">
        <feTurbulence
          type="turbulence"
          :baseFrequency="baseFrequency"
          :numOctaves="numOctaves"
          result="turbulence"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          :scale="scale"
          :xChannelSelector="xChannelSelector"
          :yChannelSelector="yChannelSelector"
        />
      </filter>
    </svg>
  </component>
</template>
