import { Mat2 } from '../../src/mat/mat2';

describe('Mat2', () => {
    let matA: Mat2;
    let matB: Mat2;

    beforeEach(() => {
        matA = new Mat2(1, 2, 3, 4);
        matB = new Mat2(4, 3, 2, 1);
    });

    it('should add two matrices', () => {
        const result = matA.add(matB);

        expect(result.get(0, 0)).toBe(5);
        expect(result.get(0, 1)).toBe(5);
        expect(result.get(1, 0)).toBe(5);
        expect(result.get(1, 1)).toBe(5);
    });

    it('should subtract two matrices', () => {
        const result = matA.subtract(matB);

        expect(result.get(0, 0)).toBe(-3);
        expect(result.get(0, 1)).toBe(-1);
        expect(result.get(1, 0)).toBe(1);
        expect(result.get(1, 1)).toBe(3);
    });

    it('should multiply two matrices', () => {
        const result = matA.multiply(matB);

        expect(result.get(0, 0)).toBe(8);
        expect(result.get(0, 1)).toBe(5);
        expect(result.get(1, 0)).toBe(20);
        expect(result.get(1, 1)).toBe(13);
    });

    it('should multiply the matrix by a scalar', () => {
        const scalar = 2;
        const result = matA.scalarMultiply(scalar);

        expect(result.get(0, 0)).toBe(2);
        expect(result.get(0, 1)).toBe(4);
        expect(result.get(1, 0)).toBe(6);
        expect(result.get(1, 1)).toBe(8);
    });

    it('should divide the matrix by a scalar', () => {
        const scalar = 2;
        const result = matA.scalarDivide(scalar);

        expect(result.get(0, 0)).toBeCloseTo(0.5, 5);
        expect(result.get(0, 1)).toBeCloseTo(1, 5);
        expect(result.get(1, 0)).toBeCloseTo(1.5, 5);
        expect(result.get(1, 1)).toBeCloseTo(2, 5);
    });

    it('should throw an error when dividing by zero', () => {
        const zeroMat = new Mat2(0, 0, 0, 0);

        expect(() => {
            zeroMat.scalarDivide(0);
        }).toThrowError('Division by zero is not allowed.');
    });
});
