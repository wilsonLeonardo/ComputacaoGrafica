import { MatBase } from "./matBase";

export class Mat4 extends MatBase {
    constructor(
        e00: number, e01: number, e02: number, e03: number,
        e10: number, e11: number, e12: number, e13: number,
        e20: number, e21: number, e22: number, e23: number,
        e30: number, e31: number, e32: number, e33: number
    ) {
        super(4, 4)
        
        this.e = [
            [e00, e01, e02, e03],
            [e10, e11, e12, e13],
            [e20, e21, e22, e23],
            [e30, e31, e32, e33],
        ];
    }

    get(row: number, col: number): number {
        return this.e[row][col];
    }

    set(row: number, col: number, value: number): void {
        this.e[row][col] = value;
    }

    add(m: Mat4): Mat4 {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.e[i][j] += m.get(i, j);
            }
        }
        return this;
    }

    subtract(m: Mat4): Mat4 {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.e[i][j] -= m.get(i, j);
            }
        }
        return this;
    }

    multiply(m: Mat4): Mat4 {
        const result = new Mat4(
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        );

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                for (let k = 0; k < 4; k++) {
                    result.set(i, j, result.get(i, j) + this.get(i, k) * m.get(k, j));
                }
            }
        }

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.e[i][j] = result.get(i, j);
            }
        }
        return this;
    }

    scalarMultiply(scalar: number): Mat4 {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.e[i][j] *= scalar;
            }
        }
        return this;
    }

    scalarDivide(scalar: number): Mat4 {
        if (scalar === 0) {
            throw new Error('Division by zero is not allowed.');
        }

        return this.scalarMultiply(1 / scalar);
    }
}