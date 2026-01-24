/**
 * Generates a unique filter ID for glass effect
 * @returns Unique filter ID string
 */
export function generateFilterId(): string {
  return `vglass-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 11)}`;
}

