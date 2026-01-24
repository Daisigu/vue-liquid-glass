import type { VGlassDirectiveConfig } from "./types";

/**
 * Extended HTMLElement interface for v-glass directive
 * Contains internal properties used by the directive
 */
export interface VGlassHTMLElement extends HTMLElement {
  /**
   * Unique filter ID for this element
   */
  __vglass_filterId?: string;

  /**
   * SVG element containing the filter
   */
  __vglass_svg?: SVGElement;

  /**
   * Last applied configuration
   */
  __vglass_config?: Required<VGlassDirectiveConfig>;
}

/**
 * Extended CSSStyleDeclaration interface with webkitBackdropFilter
 */
export interface VGlassCSSStyleDeclaration extends CSSStyleDeclaration {
  /**
   * WebKit-specific backdrop filter property
   */
  webkitBackdropFilter?: string;
}

