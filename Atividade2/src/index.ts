import fs from "fs";
import writeColor from "./utils/Color";
import { Vec3 } from "./vec/vec3";

function main() {
  const image_width = 256;
  const image_height = 256;

  const writer = fs.createWriteStream("src/out/image.ppm");

  writer.write(`P3\n${image_width} ${image_height}\n255\n`);

  for (let j = 0; j < image_height; ++j) {
    console.log(`Scanlines remaining: ${image_height - j}`);
    for (let i = 0; i < image_width; ++i) {
      const pixel_color = new Vec3(
        i / (image_width - 1),
        j / (image_height - 1),
        0
      );
      writeColor(writer, pixel_color);
    }
  }

  console.log("Done.");
}

main();
