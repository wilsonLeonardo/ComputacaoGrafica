import { Mat3 } from '../../src/mat/mat3';

describe('Mat3', () => {
  let matA: Mat3;
  let matB: Mat3;

  beforeEach(() => {
    matA = new Mat3(1, 2, 3, 4, 5, 6, 7, 8, 9);
    matB = new Mat3(9, 8, 7, 6, 5, 4, 3, 2, 1);
  });

  it('should add two matrices', () => {
    const result = matA.add(matB);

    expect(result.get(0, 0)).toBe(10);
    expect(result.get(0, 1)).toBe(10);
    expect(result.get(0, 2)).toBe(10);
    expect(result.get(1, 0)).toBe(10);
    expect(result.get(1, 1)).toBe(10);
    expect(result.get(1, 2)).toBe(10);
    expect(result.get(2, 0)).toBe(10);
    expect(result.get(2, 1)).toBe(10);
    expect(result.get(2, 2)).toBe(10);
  });

  it('should subtract two matrices', () => {
    const result = matA.subtract(matB);

    expect(result.get(0, 0)).toBe(-8);
    expect(result.get(0, 1)).toBe(-6);
    expect(result.get(0, 2)).toBe(-4);
    expect(result.get(1, 0)).toBe(-2);
    expect(result.get(1, 1)).toBe(0);
    expect(result.get(1, 2)).toBe(2);
    expect(result.get(2, 0)).toBe(4);
    expect(result.get(2, 1)).toBe(6);
    expect(result.get(2, 2)).toBe(8);
  });

  it('should multiply two matrices', () => {
    const result = matA.multiply(matB);

    expect(result.get(0, 0)).toBe(30);
    expect(result.get(0, 1)).toBe(24);
    expect(result.get(0, 2)).toBe(18);
    expect(result.get(1, 0)).toBe(84);
    expect(result.get(1, 1)).toBe(69);
    expect(result.get(1, 2)).toBe(54);
    expect(result.get(2, 0)).toBe(138);
    expect(result.get(2, 1)).toBe(114);
    expect(result.get(2, 2)).toBe(90);
  });

  it('should multiply the matrix by a scalar', () => {
    const scalar = 2;
    const result = matA.scalarMultiply(scalar);

    expect(result.get(0, 0)).toBe(2);
    expect(result.get(0, 1)).toBe(4);
    expect(result.get(0, 2)).toBe(6);
    expect(result.get(1, 0)).toBe(8);
    expect(result.get(1, 1)).toBe(10);
    expect(result.get(1, 2)).toBe(12);
    expect(result.get(2, 0)).toBe(14);
    expect(result.get(2, 1)).toBe(16);
    expect(result.get(2, 2)).toBe(18);
  });

  it('should divide the matrix by a scalar', () => {
    const scalar = 2;
    const result = matA.scalarDivide(scalar);

    expect(result.get(0, 0)).toBeCloseTo(0.5, 5);
    expect(result.get(0, 1)).toBeCloseTo(1, 5);
    expect(result.get(0, 2)).toBeCloseTo(1.5, 5);
    expect(result.get(1, 0)).toBeCloseTo(2, 5);
    expect(result.get(1, 1)).toBeCloseTo(2.5, 5);
    expect(result.get(1, 2)).toBeCloseTo(3, 5);
    expect(result.get(2, 0)).toBeCloseTo(3.5, 5);
    expect(result.get(2, 1)).toBeCloseTo(4, 5);
    expect(result.get(2, 2)).toBeCloseTo(4.5, 5);
  });

  it('should throw an error when dividing by zero', () => {
    const zeroMat = new Mat3(0, 0, 0, 0, 0, 0, 0, 0, 0);

    expect(() => {
        zeroMat.scalarDivide(0);
    }).toThrowError('Division by zero is not allowed.');
});
});
