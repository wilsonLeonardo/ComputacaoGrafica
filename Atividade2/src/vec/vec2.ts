import { VecBase } from "./vecBase";

export class Vec2 extends VecBase {

  constructor(e0: number, e1: number) {
    super(2)
    this.e = [e0, e1];
  }

  x(): number {
    return this.e[0];
  }

  y(): number {
    return this.e[1];
  }

  negate(): Vec2 {
    return new Vec2(-this.e[0], -this.e[1]);
  }

  get(index: number): number {
    return this.e[index];
  }

  set(index: number, value: number): void {
    this.e[index] = value;
  }

  add(v: Vec2): Vec2 {
    this.e[0] += v.e[0];
    this.e[1] += v.e[1];
    return this;
  }

  scale(t: number): Vec2 {
    this.e[0] *= t;
    this.e[1] *= t;
    return this;
  }

  divide(t: number): Vec2 {
    if (t === 0) {
      throw new Error('Division by zero is not allowed.');
  }
    return this.scale(1 / t);
  }

  length(): number {
    return Math.sqrt(this.lengthSquared());
  }

  lengthSquared(): number {
    return this.e[0] * this.e[0] + this.e[1] * this.e[1];
  }
}

/**
 * Calculates the dot product of two Vec2 objects.
 * @param u The first Vec2 object.
 * @param v The second Vec2 object.
 * @returns The dot product of the two Vec2 objects.
 */
export function dot(u: Vec2, v: Vec2): number {
  return u.x() * v.x() + u.y() * v.y();
}

/**
 * Calculates the unit vector (normalized) of a Vec2 vector.
 * @param v The Vec2 vector to be normalized.
 * @returns A new Vec2 representing the unit vector of the input vector.
 */
export function unitVector(v: Vec2): Vec2 {
  return v.divide(v.length());
}