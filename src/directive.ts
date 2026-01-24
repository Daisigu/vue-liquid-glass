import type { Directive, DirectiveBinding } from "vue";
import type { VGlassDirectiveConfig } from "./types";
import { defaultVGlassDirectiveConfig } from "./types";
import { generateFilterId } from "./utils";
import type { VGlassHTMLElement, VGlassCSSStyleDeclaration } from "./directive-types";

/**
 * Merges user config with default config
 */
function mergeConfig(
  userConfig: VGlassDirectiveConfig | undefined | null | string | boolean,
  defaultConfig: Required<VGlassDirectiveConfig>
): Required<VGlassDirectiveConfig> {
  // Handle cases where directive is used without value (v-glass) or with invalid value
  if (
    !userConfig ||
    typeof userConfig === "string" ||
    typeof userConfig === "boolean" ||
    (typeof userConfig === "object" && Object.keys(userConfig).length === 0)
  ) {
    return { ...defaultConfig };
  }

  // Type guard to ensure userConfig is VGlassDirectiveConfig
  if (typeof userConfig !== "object") {
    return { ...defaultConfig };
  }

  const config = userConfig as VGlassDirectiveConfig;

  return {
    blur: config.blur ?? defaultConfig.blur,
    scale: config.scale ?? defaultConfig.scale,
    baseFrequency: config.baseFrequency ?? defaultConfig.baseFrequency,
    xChannelSelector: config.xChannelSelector ?? defaultConfig.xChannelSelector,
    yChannelSelector: config.yChannelSelector ?? defaultConfig.yChannelSelector,
    numOctaves: config.numOctaves ?? defaultConfig.numOctaves,
  };
}

/**
 * Creates SVG filter element
 */
function createSVGFilter(
  filterId: string,
  config: Required<VGlassDirectiveConfig>
): SVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("role", "presentation");
  svg.style.cssText =
    "position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none";

  const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
  filter.setAttribute("id", filterId);
  filter.setAttribute("color-interpolation-filters", "sRGB");

  const feTurbulence = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "feTurbulence"
  );
  feTurbulence.setAttribute("type", "turbulence");
  feTurbulence.setAttribute("baseFrequency", config.baseFrequency.toString());
  feTurbulence.setAttribute("numOctaves", config.numOctaves.toString());
  feTurbulence.setAttribute("result", "turbulence");

  const feDisplacementMap = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "feDisplacementMap"
  );
  feDisplacementMap.setAttribute("in", "SourceGraphic");
  feDisplacementMap.setAttribute("in2", "turbulence");
  feDisplacementMap.setAttribute("scale", config.scale.toString());
  feDisplacementMap.setAttribute("xChannelSelector", config.xChannelSelector);
  feDisplacementMap.setAttribute("yChannelSelector", config.yChannelSelector);

  filter.appendChild(feTurbulence);
  filter.appendChild(feDisplacementMap);
  svg.appendChild(filter);

  return svg;
}

/**
 * Updates SVG filter element with new config
 */
function updateSVGFilter(
  svg: SVGElement,
  config: Required<VGlassDirectiveConfig>
): void {
  const filter = svg.querySelector("filter");
  if (!filter) return;

  const feTurbulence = filter.querySelector("feTurbulence");
  const feDisplacementMap = filter.querySelector("feDisplacementMap");

  if (feTurbulence) {
    feTurbulence.setAttribute("baseFrequency", config.baseFrequency.toString());
    feTurbulence.setAttribute("numOctaves", config.numOctaves.toString());
  }

  if (feDisplacementMap) {
    feDisplacementMap.setAttribute("scale", config.scale.toString());
    feDisplacementMap.setAttribute("xChannelSelector", config.xChannelSelector);
    feDisplacementMap.setAttribute("yChannelSelector", config.yChannelSelector);
  }
}

/**
 * Compares two configs to check if they are different
 */
function configChanged(
  oldConfig: Required<VGlassDirectiveConfig> | undefined,
  newConfig: Required<VGlassDirectiveConfig>
): boolean {
  if (!oldConfig) return true;

  return (
    oldConfig.blur !== newConfig.blur ||
    oldConfig.scale !== newConfig.scale ||
    oldConfig.baseFrequency !== newConfig.baseFrequency ||
    oldConfig.xChannelSelector !== newConfig.xChannelSelector ||
    oldConfig.yChannelSelector !== newConfig.yChannelSelector ||
    oldConfig.numOctaves !== newConfig.numOctaves
  );
}

/**
 * Applies glass effect styles to element
 */
function applyStyles(
  el: HTMLElement,
  filterId: string,
  blur: number
): void {
  const filterValue = `url(#${filterId}) blur(${blur}px)`;
  const style = el.style as VGlassCSSStyleDeclaration;
  style.backdropFilter = filterValue;
  style.webkitBackdropFilter = filterValue;
}

/**
 * Interface for directive value
 * Vue can pass various types when directive is used without value
 */
type DirectiveValue = VGlassDirectiveConfig | undefined | null | string | boolean;

/**
 * Creates v-glass directive with optional default configuration
 * @param defaultConfig - Optional default configuration that will be merged with user config
 * @returns Vue directive
 */
export function createVGlassDirective(
  defaultConfig?: Partial<VGlassDirectiveConfig>
): Directive<VGlassHTMLElement, DirectiveValue> {
  const mergedDefaultConfig: Required<VGlassDirectiveConfig> = {
    blur: defaultConfig?.blur ?? defaultVGlassDirectiveConfig.blur,
    scale: defaultConfig?.scale ?? defaultVGlassDirectiveConfig.scale,
    baseFrequency:
      defaultConfig?.baseFrequency ?? defaultVGlassDirectiveConfig.baseFrequency,
    xChannelSelector:
      defaultConfig?.xChannelSelector ?? defaultVGlassDirectiveConfig.xChannelSelector,
    yChannelSelector:
      defaultConfig?.yChannelSelector ?? defaultVGlassDirectiveConfig.yChannelSelector,
    numOctaves:
      defaultConfig?.numOctaves ?? defaultVGlassDirectiveConfig.numOctaves,
  };

  /**
   * Internal function to apply or update glass effect
   */
  const applyOrUpdateGlass = (
    el: VGlassHTMLElement,
    binding: DirectiveBinding<DirectiveValue>
  ): void => {
    const newConfig = mergeConfig(binding.value, mergedDefaultConfig);
    const filterId = el.__vglass_filterId;
    const oldConfig = el.__vglass_config;

    // Check if config actually changed
    if (!configChanged(oldConfig, newConfig)) {
      return;
    }

    if (filterId) {
      const svg = el.__vglass_svg;
      if (svg) {
        // Update SVG filter attributes directly (more efficient than recreating)
        updateSVGFilter(svg, newConfig);
      } else {
        // If SVG doesn't exist, create it
        el.__vglass_svg = createSVGFilter(filterId, newConfig);
        document.body.appendChild(el.__vglass_svg);
      }

      // Update styles (blur might have changed)
      applyStyles(el, filterId, newConfig.blur);

      // Store new config
      el.__vglass_config = { ...newConfig };
    }
  };

  return {
    mounted(el: VGlassHTMLElement, binding: DirectiveBinding<DirectiveValue>) {
      const config = mergeConfig(binding.value, mergedDefaultConfig);
      const filterId = generateFilterId();

      // Store filterId, svg element and config on the element
      el.__vglass_filterId = filterId;
      el.__vglass_config = { ...config };
      el.__vglass_svg = createSVGFilter(filterId, config);

      // Append SVG to body
      document.body.appendChild(el.__vglass_svg);

      // Apply styles
      applyStyles(el, filterId, config.blur);
    },

    beforeUpdate(el: VGlassHTMLElement, binding: DirectiveBinding<DirectiveValue>) {
      // beforeUpdate is called before the component updates
      // This ensures we catch changes in reactive objects even if updated() is not called
      applyOrUpdateGlass(el, binding);
    },

    updated(el: VGlassHTMLElement, binding: DirectiveBinding<DirectiveValue>) {
      // updated is called after the component updates
      // We still check here as a fallback
      applyOrUpdateGlass(el, binding);
    },

    unmounted(el: VGlassHTMLElement) {
      const svg = el.__vglass_svg;
      if (svg && svg.parentNode) {
        svg.parentNode.removeChild(svg);
      }

      // Clean up
      delete el.__vglass_filterId;
      delete el.__vglass_svg;
      delete el.__vglass_config;
    },
  };
}

/**
 * Default v-glass directive instance
 */
export const vGlassDirective = createVGlassDirective();

