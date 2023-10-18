import { VecBase } from "./vecBase";

export class Vec4 extends VecBase {
  constructor(e0: number, e1: number, e2: number, e3: number) {
    super(4)
    this.e = [e0, e1, e2, e3];
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

  w(): number {
    return this.e[3];
  }

  negate(): Vec4 {
    return new Vec4(-this.e[0], -this.e[1], -this.e[2], -this.e[3]);
  }

  get(index: number): number {
    return this.e[index];
  }

  set(index: number, value: number): void {
    this.e[index] = value;
  }

  add(v: Vec4): Vec4 {
    this.e[0] += v.e[0];
    this.e[1] += v.e[1];
    this.e[2] += v.e[2];
    this.e[3] += v.e[3];
    return this;
  }

  scale(t: number): Vec4 {
    this.e[0] *= t;
    this.e[1] *= t;
    this.e[2] *= t;
    this.e[3] *= t;
    return this;
  }

  divide(t: number): Vec4 {
    return this.scale(1 / t);
  }

  length(): number {
    return Math.sqrt(this.lengthSquared());
  }

  lengthSquared(): number {
    return (
      this.e[0] * this.e[0] +
      this.e[1] * this.e[1] +
      this.e[2] * this.e[2] +
      this.e[3] * this.e[3]
    );
  }
}

/**
 * Calculates the dot product of two Vec2 objects.
 * @param u The first Vec2 object.
 * @param v The second Vec2 object.
 * @returns The dot product of the two Vec2 objects.
 */
export function dot(u: Vec4, v: Vec4): number {
  return u.x() * v.x() + u.y() * v.y() + u.z() * v.z() + u.w() * v.w();
}

/**
 * Calculates the unit vector (normalized) of a Vec2 vector.
 * @param v The Vec2 vector to be normalized.
 * @returns A new Vec2 representing the unit vector of the input vector.
 */
export function unitVector(v: Vec4): Vec4 {
  return v.divide(v.length());
}