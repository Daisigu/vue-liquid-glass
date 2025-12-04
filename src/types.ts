export interface VGlassProps {
  /**
   * HTML tag to render as root element
   * @default "div"
   */
  as?: string;

  /**
   * CSS blur in pixels
   * @default 0
   */
  blur?: number;

  /**
   * Displacement strength
   * @default 20
   */
  scale?: number;

  /**
   * Turbulence frequency
   * @default 0.01
   */
  baseFrequency?: number;

  /**
   * X axis color channel
   * @default "R"
   */
  xChannelSelector?: "R" | "G" | "B" | "A";

  /**
   * Y axis color channel
   * @default "G"
   */
  yChannelSelector?: "R" | "G" | "B" | "A";

  /**
   * Turbulence detail
   * @default 2
   */
  numOctaves?: number;
}

