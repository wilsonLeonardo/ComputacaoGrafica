import { Vec3 } from "../vec/vec3";
import { WriteStream } from "fs";

export type Color = Vec3;

/**
 * Writes the color to the output stream to generate an image.
 * @param out The output file stream.
 * @param pixelColor The vector that generates the image's pixel color.
 */
export default function writeColor(out: WriteStream, pixelColor: Color): void {
  out.write(
    `${Math.floor(255.999 * pixelColor.x())} ` +
      `${Math.floor(255.999 * pixelColor.y())} ` +
      `${Math.floor(255.999 * pixelColor.z())}\n`
  );
}
