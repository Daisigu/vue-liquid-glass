export interface VGlassProps {
  /**
   * HTML tag to render as root element
   * @default "div"
   * @example "div"
   * @example "section"
   */
  as?: string;

  /**
   * CSS blur in pixels
   * @default 0
   * @example 10
   */
  blur?: number;

  /**
   * Displacement strength - controls the intensity of the glass distortion effect
   * @default 20
   * @example 30
   */
  scale?: number;

  /**
   * Turbulence frequency - controls the size of the noise pattern
   * Lower values create larger, smoother patterns
   * Higher values create finer, more detailed patterns
   * @default 0.01
   * @example 0.05
   */
  baseFrequency?: number;

  /**
   * X axis color channel for displacement
   * @default "R"
   */
  xChannelSelector?: "R" | "G" | "B" | "A";

  /**
   * Y axis color channel for displacement
   * @default "G"
   */
  yChannelSelector?: "R" | "G" | "B" | "A";

  /**
   * Turbulence detail - number of octaves in the noise function
   * Higher values create more detailed, complex patterns
   * @default 2
   * @example 3
   */
  numOctaves?: number;
}

/**
 * Configuration for v-glass directive (same as VGlassProps but without 'as' property)
 */
export interface VGlassDirectiveConfig {
  /**
   * CSS blur in pixels
   * @default 0
   * @example 10
   */
  blur?: number;

  /**
   * Displacement strength - controls the intensity of the glass distortion effect
   * @default 20
   * @example 30
   */
  scale?: number;

  /**
   * Turbulence frequency - controls the size of the noise pattern
   * Lower values create larger, smoother patterns
   * Higher values create finer, more detailed patterns
   * @default 0.01
   * @example 0.05
   */
  baseFrequency?: number;

  /**
   * X axis color channel for displacement
   * @default "R"
   */
  xChannelSelector?: "R" | "G" | "B" | "A";

  /**
   * Y axis color channel for displacement
   * @default "G"
   */
  yChannelSelector?: "R" | "G" | "B" | "A";

  /**
   * Turbulence detail - number of octaves in the noise function
   * Higher values create more detailed, complex patterns
   * @default 2
   * @example 3
   */
  numOctaves?: number;
}

/**
 * Default configuration for v-glass directive
 */
export const defaultVGlassDirectiveConfig: Required<VGlassDirectiveConfig> = {
  blur: 0,
  scale: 20,
  baseFrequency: 0.01,
  xChannelSelector: "R",
  yChannelSelector: "G",
  numOctaves: 2,
};