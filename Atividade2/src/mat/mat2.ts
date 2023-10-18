import { MatBase } from "./matBase";

export class Mat2 extends MatBase {
    constructor(e00: number, e01: number, e10: number, e11: number) {
        super(2, 2)
        this.e = [
            [e00, e01],
            [e10, e11],
        ];
    }

    get(row: number, col: number): number {
        return this.e[row][col];
    }

    set(row: number, col: number, value: number): void {
        this.e[row][col] = value;
    }

    add(m: Mat2): Mat2 {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                this.e[i][j] += m.get(i, j);
            }
        }
        return this;
    }

    subtract(m: Mat2): Mat2 {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                this.e[i][j] -= m.get(i, j);
            }
        }
        return this;
    }

    multiply(m: Mat2): Mat2 {
        const result = new Mat2(0, 0, 0, 0);

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 2; k++) {
                    result.set(i, j, result.get(i, j) + this.get(i, k) * m.get(k, j));
                }
            }
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                this.e[i][j] = result.get(i, j);
            }
        }
        return this;
    }

    scalarMultiply(scalar: number): Mat2 {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                this.e[i][j] *= scalar;
            }
        }
        return this;
    }

    scalarDivide(scalar: number): Mat2 {
        if (scalar === 0) {
            throw new Error('Division by zero is not allowed.');
        }

        return this.scalarMultiply(1 / scalar);
    }
}