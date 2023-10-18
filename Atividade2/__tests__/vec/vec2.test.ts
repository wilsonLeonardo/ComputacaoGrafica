import { Vec2, dot, unitVector } from '../../src/vec/vec2';

describe('Vec2', () => {
  let v: Vec2;

  beforeEach(() => {
    v = new Vec2(1, 2);
  });

  it('should return the negated Vec2', () => {
    const negated = v.negate();
    expect(negated.x()).toBe(-1);
    expect(negated.y()).toBe(-2);
  });

  it('should return the Vec2 with components added', () => {
    const u = new Vec2(3, 4);
    v.add(u);
    expect(v.x()).toBe(4);
    expect(v.y()).toBe(6);
  });

  it('should return the Vec2 with components scaled', () => {
    v.scale(2);
    expect(v.x()).toBe(2);
    expect(v.y()).toBe(4);
  });

  it('should return the Vec2 with components divided', () => {
    v.divide(2);
    expect(v.x()).toBe(0.5);
    expect(v.y()).toBe(1);
  });

  it('should return the correct length of the Vec2', () => {
    const length = v.length();
    expect(length).toBeCloseTo(2.23607, 5);
  });

  it('should return the correct squared length of the Vec2', () => {
    const lengthSquared = v.lengthSquared();
    expect(lengthSquared).toBe(5);
  });
});

describe('dot', () => {
  it('should return the dot product of two Vec2 objects', () => {
    const u = new Vec2(1, 2);
    const v = new Vec2(3, 4);
    const result = dot(u, v);
    expect(result).toBe(11);
  });
});

describe('unitVector', () => {
  it('should return the unit vector of a Vec2', () => {
    const v = new Vec2(3, 0);
    const unit = unitVector(v);
    expect(unit.x()).toBeCloseTo(1);
    expect(unit.y()).toBe(0);
  });
});
