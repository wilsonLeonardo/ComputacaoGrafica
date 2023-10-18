import { Mat4 } from '../../src/mat/mat4';

describe('Mat4', () => {
    let matA: Mat4;
    let matB: Mat4;

    beforeEach(() => {
        matA = new Mat4(
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        );
        matB = new Mat4(
            16, 15, 14, 13,
            12, 11, 10, 9,
            8, 7, 6, 5,
            4, 3, 2, 1
        );
    });

    it('should add two matrices', () => {
        const result = matA.add(matB);

        expect(result.get(0, 0)).toBe(17);
        expect(result.get(0, 1)).toBe(17);
        expect(result.get(0, 2)).toBe(17);
        expect(result.get(0, 3)).toBe(17);
        expect(result.get(1, 0)).toBe(17);
        expect(result.get(1, 1)).toBe(17);
        expect(result.get(1, 2)).toBe(17);
        expect(result.get(1, 3)).toBe(17);
        expect(result.get(2, 0)).toBe(17);
        expect(result.get(2, 1)).toBe(17);
        expect(result.get(2, 2)).toBe(17);
        expect(result.get(2, 3)).toBe(17);
        expect(result.get(3, 0)).toBe(17);
        expect(result.get(3, 1)).toBe(17);
        expect(result.get(3, 2)).toBe(17);
        expect(result.get(3, 3)).toBe(17);
    });

    it('should subtract two matrices', () => {
        const result = matA.subtract(matB);

        expect(result.get(0, 0)).toBe(-15);
        expect(result.get(0, 1)).toBe(-13);
        expect(result.get(0, 2)).toBe(-11);
        expect(result.get(0, 3)).toBe(-9);
        expect(result.get(1, 0)).toBe(-7);
        expect(result.get(1, 1)).toBe(-5);
        expect(result.get(1, 2)).toBe(-3);
        expect(result.get(1, 3)).toBe(-1);
        expect(result.get(2, 0)).toBe(1);
        expect(result.get(2, 1)).toBe(3);
        expect(result.get(2, 2)).toBe(5);
        expect(result.get(2, 3)).toBe(7);
        expect(result.get(3, 0)).toBe(9);
        expect(result.get(3, 1)).toBe(11);
        expect(result.get(3, 2)).toBe(13);
        expect(result.get(3, 3)).toBe(15);
    });

    it('should multiply two matrices', () => {
        const result = matA.multiply(matB);

        expect(result.get(0, 0)).toBe(80);
        expect(result.get(0, 1)).toBe(70);
        expect(result.get(0, 2)).toBe(60);
        expect(result.get(0, 3)).toBe(50);
        expect(result.get(1, 0)).toBe(240);
        expect(result.get(1, 1)).toBe(214);
        expect(result.get(1, 2)).toBe(188);
        expect(result.get(1, 3)).toBe(162);
        expect(result.get(2, 0)).toBe(400);
        expect(result.get(2, 1)).toBe(358);
        expect(result.get(2, 2)).toBe(316);
        expect(result.get(2, 3)).toBe(274);
        expect(result.get(3, 0)).toBe(560);
        expect(result.get(3, 1)).toBe(502);
        expect(result.get(3, 2)).toBe(444);
        expect(result.get(3, 3)).toBe(386);
    });

    it('should multiply the matrix by a scalar', () => {
        const scalar = 2;
        const result = matA.scalarMultiply(scalar);

        expect(result.get(0, 0)).toBe(2);
        expect(result.get(0, 1)).toBe(4);
        expect(result.get(0, 2)).toBe(6);
        expect(result.get(0, 3)).toBe(8);
        expect(result.get(1, 0)).toBe(10);
        expect(result.get(1, 1)).toBe(12);
        expect(result.get(1, 2)).toBe(14);
        expect(result.get(1, 3)).toBe(16);
        expect(result.get(2, 0)).toBe(18);
        expect(result.get(2, 1)).toBe(20);
        expect(result.get(2, 2)).toBe(22);
        expect(result.get(2, 3)).toBe(24);
        expect(result.get(3, 0)).toBe(26);
        expect(result.get(3, 1)).toBe(28);
        expect(result.get(3, 2)).toBe(30);
        expect(result.get(3, 3)).toBe(32);
    });

    it('should divide the matrix by a scalar', () => {
        const scalar = 2;
        const result = matA.scalarDivide(scalar);

        expect(result.get(0, 0)).toBeCloseTo(0.5, 5);
        expect(result.get(0, 1)).toBeCloseTo(1, 5);
        expect(result.get(0, 2)).toBeCloseTo(1.5, 5);
        expect(result.get(0, 3)).toBeCloseTo(2, 5);
        expect(result.get(1, 0)).toBeCloseTo(2.5, 5);
        expect(result.get(1, 1)).toBeCloseTo(3, 5);
        expect(result.get(1, 2)).toBeCloseTo(3.5, 5);
        expect(result.get(1, 3)).toBeCloseTo(4, 5);
        expect(result.get(2, 0)).toBeCloseTo(4.5, 5);
        expect(result.get(2, 1)).toBeCloseTo(5, 5);
        expect(result.get(2, 2)).toBeCloseTo(5.5, 5);
        expect(result.get(2, 3)).toBeCloseTo(6, 5);
        expect(result.get(3, 0)).toBeCloseTo(6.5, 5);
        expect(result.get(3, 1)).toBeCloseTo(7, 5);
        expect(result.get(3, 2)).toBeCloseTo(7.5, 5);
        expect(result.get(3, 3)).toBeCloseTo(8, 5);
    });

    it('should throw an error when dividing by zero', () => {
        const zeroMat = new Mat4(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0
        );

        expect(() => {
            zeroMat.scalarDivide(0);
        }).toThrowError('Division by zero is not allowed.');
    });
});
