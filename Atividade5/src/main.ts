import Sphere from './shapes/Sphere';
import { Triangle } from './shapes/Triangle';
import Camera from './utils/Camera';
import { HittableList } from './utils/HittableList';
import { Lambertian } from './utils/Lambertian';
import { Point3 } from './utils/Ray';
import CustomOBJParser from './utils/objParser/CustomOBJParser';
import { ObjModel } from './utils/objParser/ICustomOBJParser';
import { Vec3 } from './vec/vec3';
import fs from 'fs';

/**
 * Converts an OBJ model to an array of triangles.
 * @param model - The OBJ model to convert.
 * @param translation - Translation vector for the model.
 * @param resize - Scaling factor for the model.
 * @returns An array of triangles representing the OBJ model.
 */
function objToTriangles(
  model: ObjModel,
  translation: Point3 = new Point3(0, 0, 0),
  resize: number = 1,
): Array<Triangle> {
  const triangles = [];
  for (const face of model.faces) {
    const vertices = face.vertices.map((vertex) => model.vertices[vertex.vertexIndex - 1]);
    const verticesNormals = face.vertices.map((vertex) => model.vertexNormals[vertex.vertexNormalIndex - 1]);

    const validVertices = vertices.map(
      (vtx) =>
        new Vec3(
          (vtx.x + translation?.x()) * resize,
          (vtx.y + translation?.y()) * resize,
          (vtx.z + translation?.z()) * resize,
        ),
    );

    let validVerticesNormals = undefined;
    if (!verticesNormals.every((vtx) => vtx === undefined))
      validVerticesNormals = verticesNormals.map((vtx) => new Vec3(vtx.x, vtx.y, vtx.z));

    const triangle = new Triangle(
      validVertices[0],
      validVertices[1],
      validVertices[2],
      new Lambertian(new Vec3(0.7, 0.3, 0.3)),
      validVerticesNormals,
    );

    triangles.push(triangle);
  }
  return triangles;
}

/**
 * Reads an OBJ file and returns the parsed OBJ model.
 * @param objFilePath - Path to the OBJ file.
 * @returns The parsed OBJ model.
 */
function readObject(objFilePath: string): ObjModel {
  const data = fs.readFileSync(objFilePath, 'utf-8');
  const parser = new CustomOBJParser(data);
  return parser.parse().models[0];
}

/**
 * The main export function to generate images with spheres, triangles, and other 3D objects.
 */
export function main() {
  const world = new HittableList();

  const model = readObject('src/obj/cube.obj');

  const translate = new Point3(-0.3, -2.8, 0);
  objToTriangles(model, translate, 0.8).forEach((shapes) => {
    world.add(shapes);
  });

  world.add(new Sphere(new Point3(-3, 0, -3), 0.5, new Lambertian(new Vec3(0.5, 0.5, 1))));
  world.add(new Sphere(new Point3(1.5, 0, 1.5), 0.5, new Lambertian(new Vec3(1, 0.5, 0.5))));

  world.add(new Sphere(new Point3(0, -100.5, -1), 100, new Lambertian(new Vec3(0.5, 1, 0.5))));

  const cam = new Camera();

  cam.aspectRatio = 16.0 / 9.0;
  cam.imageWidth = 400;
  cam.samplesPerPixel = 100;
  cam.maxDepth = 10;
  cam.vFov = 40;
  cam.lookFrom = new Point3(0.4, 2, 5);
  cam.lookAt = new Point3(0, 0, -1);
  cam.vup = new Vec3(0, 1, 0);

  cam.render('world-first-position', world);
  cam.lookFrom = new Point3(3, 2, 5);

  cam.render('world-second-position', world);
}
