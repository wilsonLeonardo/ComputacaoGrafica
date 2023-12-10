import { Vec3 } from '../vec/vec3';

export class Point3 extends Vec3 {
  constructor(x: number, y: number, z: number) {
    super(x, y, z);
  }
}

export class Ray {
  orig: Point3;
  dir: Vec3;

  constructor(origin: Point3, direction: Vec3) {
    this.orig = origin;
    this.dir = direction;
  }

  origin(): Point3 {
    return this.orig;
  }

  direction(): Vec3 {
    return this.dir;
  }

  at(t: number): Point3 {
    return this.orig.add(this.dir.scale(t));
  }
}
