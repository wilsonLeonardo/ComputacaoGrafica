import { Vec3 } from "../vec/vec3";

export type Color = Vec3;

/**
 * Writes the color to the output stream to generate an image.
 * @param pixelColor The vector that generates the image's pixel color.
 */
export default function writeColor(pixelColor: Color): string {
  return `${Math.floor(255.999 * pixelColor.x())} ` +
      `${Math.floor(255.999 * pixelColor.y())} ` +
      `${Math.floor(255.999 * pixelColor.z())}\n`
}
