import { Vec3, cross, dot, unitVector } from '../../src/vec/vec3';

describe('Vec3', () => {
  let v: Vec3;

  beforeEach(() => {
    v = new Vec3(1, 2, 3);
  });

  it('should returns the negated Vec3', () => {
    const negated = v.negate();
    expect(negated.x()).toBe(-1);
    expect(negated.y()).toBe(-2);
    expect(negated.z()).toBe(-3);
  });

  it('should returns the Vec3 with components added', () => {
    const u = new Vec3(3, 4, 5);
    v.add(u);
    expect(v.x()).toBe(4);
    expect(v.y()).toBe(6);
    expect(v.z()).toBe(8);
  });

  it('should returns the Vec3 with components scaled', () => {
    v.scale(2);
    expect(v.x()).toBe(2);
    expect(v.y()).toBe(4);
    expect(v.z()).toBe(6);
  });

  it('should returns the Vec3 with components divided', () => {
    v.divide(2);
    expect(v.x()).toBe(0.5);
    expect(v.y()).toBe(1);
    expect(v.z()).toBe(1.5);
  });

  it('should returns the correct length of the Vec3', () => {
    const length = v.length();
    expect(length).toBeCloseTo(3.741657, 5);
  });

  it('should returns the correct squared length of the Vec3', () => {
    const lengthSquared = v.lengthSquared();
    expect(lengthSquared).toBe(14);
  });
});

describe('dot', () => {
    it('should returns the product of two Vec3 objects', () => {
      const u = new Vec3(1, 2, 3);
      const v = new Vec3(4, 5, 6);
      const result = dot(u, v);
      expect(result).toBe(32);
    });
});
  
describe('cross', () => {
    it('should returns the product of two Vec3 objects', () => {
        const u = new Vec3(1, 0, 0);
        const v = new Vec3(0, 1, 0);
        const result = cross(u, v);
        expect(result.x()).toBe(0);
        expect(result.y()).toBe(0);
        expect(result.z()).toBe(1);
    });
});
  
describe('unitVector', () => {
    it('should returns the unit vector of a Vec3', () => {
        const v = new Vec3(3, 0, 0);
        const unit = unitVector(v);
        expect(unit.x()).toBe(1);
        expect(unit.y()).toBe(0);
        expect(unit.z()).toBe(0);
    });
});