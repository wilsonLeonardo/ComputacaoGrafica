// Import necessary modules and classes
import writeColor, { Color } from './utils/Color';
import GenerateImage from './utils/GenerateImage';
import { Point3, Ray } from './utils/Ray';
import { Vec3, cross, dot, unitVector } from './vec/vec3';

/**
 * Checks if a ray intersects with a sphere.
 * @param center - The center of the sphere.
 * @param radius - The radius of the sphere.
 * @param r - The ray to check for intersection.
 * @returns True if the ray intersects with the sphere, otherwise false.
 */
export function hitSphere(center: Point3, radius: number, r: Ray): boolean {
  const oc: Vec3 = r.origin().subtract(center);
  const a: number = dot(r.direction(), r.direction());
  const b: number = 2.0 * dot(oc, r.direction());
  const c: number = dot(oc, oc) - radius * radius;
  const discriminant: number = b * b - 4 * a * c;
  return discriminant >= 0;
}

/**
 * Determines the color of a pixel on a sphere based on ray-sphere intersection.
 * @param r - The ray for which to calculate the color.
 * @returns The color of the pixel.
 */
export function rayColorSphere(r: Ray): Color {
  const sphereCenter: Point3 = new Vec3(0, 0, -1);
  const sphereRadius: number = 0.5;

  if (hitSphere(sphereCenter, sphereRadius, r)) {
    return new Vec3(1, 0, 0); // Return red color if the ray hits the sphere
  }

  const unitDirection: Vec3 = unitVector(r.direction());
  const a: number = 0.5 * (unitDirection.y() + 1.0);

  const white = new Vec3(1.0, 1.0, 1.0);
  const blue = new Vec3(0.5, 0.7, 1.0);

  // Linear interpolation (lerp) between white and blue based on the y-coordinate of the unit direction
  return white.scale(1.0 - a).add(blue.scale(a));
}

/**
 * Draws a sphere and generates PPM content.
 * @param imageWidth - The width of the image.
 * @param imageHeight - The height of the image.
 * @param cameraCenter - The center of the camera.
 * @param pixel00Loc - The location of the top-left pixel.
 * @param pixelDeltaU - The horizontal delta vector from pixel to pixel.
 * @param pixelDeltaV - The vertical delta vector from pixel to pixel.
 * @returns The PPM content representing the drawn sphere.
 */
export function drawSphere(
  imageWidth: number,
  imageHeight: number,
  cameraCenter: Vec3,
  pixel00Loc: Vec3,
  pixelDeltaU: Vec3,
  pixelDeltaV: Vec3,
): string {
  let content = `P3\n${imageWidth} ${imageHeight}\n255\n`;

  for (let j = 0; j < imageHeight; ++j) {
    console.log(`\rScanlines remaining: ${imageHeight - j} `);
    for (let i = 0; i < imageWidth; ++i) {
      const pixelCenter = pixel00Loc.add(pixelDeltaU.scale(i)).add(pixelDeltaV.scale(j));
      const rayDirection = pixelCenter.subtract(cameraCenter);
      const r = new Ray(cameraCenter, rayDirection);

      const pixelColor = rayColorSphere(r);
      content += writeColor(pixelColor);
    }
  }
  console.log('Done');
  return content;
}

/**
 * Checks if a ray intersects with a triangle defined by its vertices.
 * @param v0 - The first vertex of the triangle.
 * @param v1 - The second vertex of the triangle.
 * @param v2 - The third vertex of the triangle.
 * @param r - The ray to check for intersection.
 * @returns True if the ray intersects with the triangle, otherwise false.
 */
export function hitTriangle(v0: Point3, v1: Point3, v2: Point3, r: Ray): boolean {
  const edge1 = v1.subtract(v0);
  const edge2 = v2.subtract(v0);
  const h = cross(unitVector(r.direction()), edge2);
  const a = dot(edge1, h);

  if (a > -Number.EPSILON && a < Number.EPSILON) return false;

  const f = 1.0 / a;
  const s = r.origin().subtract(v0);
  const u = f * dot(s, h);

  if (u < 0.0 || u > 1.0) return false;

  const q = cross(s, edge1);
  const v = f * dot(unitVector(r.direction()), q);

  if (v < 0.0 || u + v > 1.0) return false;

  const t = f * dot(edge2, q);

  return t > Number.EPSILON;
}

/**
 * Determines the color of a pixel on a triangle based on ray-triangle intersection.
 * @param r - The ray for which to calculate the color.
 * @returns The color of the pixel.
 */
export function rayColorTriangle(r: Ray): Color {
  const v0: Point3 = new Vec3(-1, -1, -1);
  const v1: Point3 = new Vec3(1, -1, -1);
  const v2: Point3 = new Vec3(0, 1, -1);

  if (hitTriangle(v0, v1, v2, r)) {
    return new Vec3(1, 0, 0); // Return red color for the triangle
  }

  const unitDirection: Vec3 = unitVector(r.direction());
  const a: number = 0.5 * (unitDirection.y() + 1.0);

  const white = new Vec3(1.0, 1.0, 1.0);
  const blue = new Vec3(0.5, 0.7, 1.0);

  // Linear interpolation (lerp) between white and blue based on the y-coordinate of the unit direction
  return white.scale(1.0 - a).add(blue.scale(a));
}

/**
 * Draws a triangle and generates PPM content.
 * @param imageWidth - The width of the image.
 * @param imageHeight - The height of the image.
 * @param cameraCenter - The center of the camera.
 * @param pixel00Loc - The location of the top-left pixel.
 * @param pixelDeltaU - The horizontal delta vector from pixel to pixel.
 * @param pixelDeltaV - The vertical delta vector from pixel to pixel.
 * @returns The PPM content representing the drawn triangle.
 */
export function drawTriangle(
  imageWidth: number,
  imageHeight: number,
  cameraCenter: Vec3,
  pixel00Loc: Vec3,
  pixelDeltaU: Vec3,
  pixelDeltaV: Vec3,
): string {
  let content = `P3\n${imageWidth} ${imageHeight}\n255\n`;

  for (let j = 0; j < imageHeight; ++j) {
    console.log(`\rScanlines remaining: ${imageHeight - j} `);
    for (let i = 0; i < imageWidth; ++i) {
      const pixelCenter = pixel00Loc.add(pixelDeltaU.scale(i)).add(pixelDeltaV.scale(j));
      const rayDirection = pixelCenter.subtract(cameraCenter);
      const r = new Ray(cameraCenter, rayDirection);

      const pixelColor = rayColorTriangle(r);
      content += writeColor(pixelColor);
    }
  }
  console.log('Done');
  return content;
}

/**
 * The main export function to generate images with spheres, triangles, and other 3D objects.
 */
export function main() {
  // Image
  const aspectRatio = 16 / 9;
  const imageWidth = 400;

  // Calculate the image height, and ensure that it's at least 1.
  let imageHeight = Math.floor(imageWidth / aspectRatio);
  imageHeight = imageHeight < 1 ? 1 : imageHeight;

  // Image Generator
  const imageGenerator = new GenerateImage(imageWidth, imageHeight);

  // Camera
  const focalLength = 1.0;
  const viewportHeight = 2.0;
  const viewportWidth = viewportHeight * (imageWidth / imageHeight);
  const cameraCenter = new Point3(0, 0, 0);

  // Calculate the vectors across the horizontal and down the vertical viewport edges.
  const viewportU = new Vec3(viewportWidth, 0, 0);
  const viewportV = new Vec3(0, -viewportHeight, 0);

  // Calculate the horizontal and vertical delta vectors from pixel to pixel.
  const pixelDeltaU = viewportU.divide(imageWidth);
  const pixelDeltaV = viewportV.divide(imageHeight);

  // Calculate the location of the upper left pixel.
  const viewportUpperLeft = cameraCenter
    .subtract(new Vec3(0, 0, focalLength))
    .subtract(viewportU.divide(2))
    .subtract(viewportV.divide(2));
  const pixel00Loc = viewportUpperLeft.add(pixelDeltaU.scale(0.5).add(pixelDeltaV.scale(0.5)));

  // Draw and generate images for a sphere and a triangle
  const sphere = drawSphere(imageWidth, imageHeight, cameraCenter, pixel00Loc, pixelDeltaU, pixelDeltaV);
  const triangle = drawTriangle(imageWidth, imageHeight, cameraCenter, pixel00Loc, pixelDeltaU, pixelDeltaV);

  // Generate images
  imageGenerator.generateImage('sphere', sphere);
  imageGenerator.generateImage('triangle', triangle);

  // const objFilePath = 'src/obj/golfball.obj';
  // const data = fs.readFileSync(objFilePath, 'utf-8');
  // const parser = new CustomOBJParser(data);

  // const result = parser.parse();

  // const obj = visualizeObjFile(result, imageWidth, imageHeight, cameraCenter);

  // imageGenerator.generateImage('objFromFile', obj);
}

main();
