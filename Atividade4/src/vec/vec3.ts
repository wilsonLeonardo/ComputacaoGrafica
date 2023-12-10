import { VecBase } from './vecBase';

export class Vec3 extends VecBase {
  constructor(e0: number, e1: number, e2: number) {
    super(3);
    this.e = [e0, e1, e2];
  }

  x(): number {
    return this.e[0];
  }

  y(): number {
    return this.e[1];
  }

  z(): number {
    return this.e[2];
  }

  negate(): Vec3 {
    return new Vec3(-this.e[0], -this.e[1], -this.e[2]);
  }

  get(index: number): number {
    return this.e[index];
  }

  set(index: number, value: number): void {
    this.e[index] = value;
  }

  add(v: Vec3): Vec3 {
    const e0 = this.e[0] + v.e[0];
    const e1 = this.e[1] + v.e[1];
    const e2 = this.e[2] + v.e[2];
    return new Vec3(e0, e1, e2);
  }

  subtract(v: Vec3): Vec3 {
    const e0 = this.e[0] - v.e[0];
    const e1 = this.e[1] - v.e[1];
    const e2 = this.e[2] - v.e[2];
    return new Vec3(e0, e1, e2);
  }

  scale(t: number): Vec3 {
    const e0 = this.e[0] * t;
    const e1 = this.e[1] * t;
    const e2 = this.e[2] * t;
    return new Vec3(e0, e1, e2);
  }

  divide(t: number): Vec3 {
    return this.scale(1 / t);
  }

  length(): number {
    return Math.sqrt(this.lengthSquared());
  }

  lengthSquared(): number {
    return this.e[0] * this.e[0] + this.e[1] * this.e[1] + this.e[2] * this.e[2];
  }
}

/**
 * Calculates the dot product of two Vec3 objects.
 * @param u The first Vec3 object.
 * @param v The second Vec3 object.
 * @returns The dot product of the two Vec3 objects.
 */
export function dot(u: Vec3, v: Vec3): number {
  return u.x() * v.x() + u.y() * v.y() + u.z() * v.z();
}

/**
 * Calculates the cross product of two Vec3 objects.
 * @param u The first Vec3 object.
 * @param v The second Vec3 object.
 * @returns The cross product of the two Vec3 objects as a new Vec3 object.
 */
export function cross(u: Vec3, v: Vec3): Vec3 {
  return new Vec3(u.y() * v.z() - u.z() * v.y(), u.z() * v.x() - u.x() * v.z(), u.x() * v.y() - u.y() * v.x());
}

/**
 * Calculates the unit vector (normalized) of a Vec3 vector.
 * @param v The Vec3 vector to be normalized.
 * @returns A new Vec3 representing the unit vector of the input vector.
 */
export function unitVector(v: Vec3): Vec3 {
  return v.divide(v.length());
}
