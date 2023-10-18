import { Vec4, dot, unitVector } from '../../src/vec/vec4';

describe('Vec4', () => {
  let v: Vec4;

  beforeEach(() => {
    v = new Vec4(1, 2, 3, 4);
  });

  it('should return the negated Vec4', () => {
    const negated = v.negate();
    expect(negated.x()).toBe(-1);
    expect(negated.y()).toBe(-2);
    expect(negated.z()).toBe(-3);
    expect(negated.w()).toBe(-4);
  });

  it('should return the Vec4 with components added', () => {
    const u = new Vec4(3, 4, 5, 6);
    v.add(u);
    expect(v.x()).toBe(4);
    expect(v.y()).toBe(6);
    expect(v.z()).toBe(8);
    expect(v.w()).toBe(10);
  });

  it('should return the Vec4 with components scaled', () => {
    v.scale(2);
    expect(v.x()).toBe(2);
    expect(v.y()).toBe(4);
    expect(v.z()).toBe(6);
    expect(v.w()).toBe(8);
  });

  it('should return the Vec4 with components divided', () => {
    v.divide(2);
    expect(v.x()).toBe(0.5);
    expect(v.y()).toBe(1);
    expect(v.z()).toBe(1.5);
    expect(v.w()).toBe(2);
  });

  it('should return the correct length of the Vec4', () => {
    const length = v.length();
    expect(length).toBeCloseTo(5.47723, 5);
  });

  it('should return the correct squared length of the Vec4', () => {
    const lengthSquared = v.lengthSquared();
    expect(lengthSquared).toBe(30);
  });
});

describe('dot', () => {
  it('should return the dot product of two Vec4 objects', () => {
    const u = new Vec4(1, 2, 3, 4);
    const v = new Vec4(5, 6, 7, 8);
    const result = dot(u, v);
    expect(result).toBe(70);
  });
});

describe('unitVector', () => {
  it('should return the unit vector of a Vec4', () => {
    const v = new Vec4(3, 0, 0, 0);
    const unit = unitVector(v);
    expect(unit.x()).toBeCloseTo(1);
    expect(unit.y()).toBe(0);
    expect(unit.z()).toBe(0);
    expect(unit.w()).toBe(0);
  });
});