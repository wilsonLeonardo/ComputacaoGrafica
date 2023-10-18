import { MatBase } from "./matBase";

export class Mat3 extends MatBase {
    constructor(
        e00: number, e01: number, e02: number,
        e10: number, e11: number, e12: number,
        e20: number, e21: number, e22: number
    ) {
        super(3, 3)

        this.e = [
        [e00, e01, e02],
        [e10, e11, e12],
        [e20, e21, e22]
        ];
    }

    get(row: number, col: number): number {
        return this.e[row][col];
    }

    set(row: number, col: number, value: number): void {
        this.e[row][col] = value;
    }

    add(m: Mat3): Mat3 {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.e[i][j] += m.get(i, j);
            }
        }
        return this
    }

    subtract(m: Mat3): Mat3 {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.e[i][j] -= m.get(i, j);
            }
        }
        return this
    }

    multiply(m: Mat3): Mat3 {
        const result = new Mat3(0, 0, 0, 0, 0, 0, 0, 0, 0);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    result.set(i, j, result.get(i, j) + this.get(i, k) * m.get(k, j));
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.e[i][j] = result.get(i, j);
            }
        }
        return this
    }

    scalarMultiply(scalar: number): Mat3 {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.e[i][j] *= scalar;
            }
        }
        return this
    }

    scalarDivide(scalar: number): Mat3 {
        if (scalar === 0) {
            throw new Error('Division by zero is not allowed.');
        }

        return this.scalarMultiply(1 / scalar)
    }
}