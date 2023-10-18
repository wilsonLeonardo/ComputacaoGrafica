/**
 * Base class for matrices
 */
export abstract class MatBase {
    protected e: number[][];

    /**
     * Constructor for MatBase
     * @param rows The number of rows in the matrix.
     * @param cols The number of columns in the matrix.
     */
    constructor(rows: number, cols: number) {
        this.e = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.e[i] = new Array(cols);
        }
    }

    /**
     * Get the value at a specific row and column in the matrix.
     * @param row The row index.
     * @param col The column index.
     * @returns The value at the specified position.
     */
    get(row: number, col: number): number {
        return this.e[row][col];
    }

    /**
     * Set the value at a specific row and column in the matrix.
     * @param row The row index.
     * @param col The column index.
     * @param value The value to be set at the specified position.
     */
    set(row: number, col: number, value: number): void {
        this.e[row][col] = value;
    }

    /**
     * Abstract method for adding two matrices.
     * @param m The matrix to be added.
     * @returns The result of the addition as a new matrix.
     */
    abstract add(m: MatBase): MatBase;

    /**
     * Abstract method for subtracting two matrices.
     * @param m The matrix to be subtracted.
     * @returns The result of the subtraction as a new matrix.
     */
    abstract subtract(m: MatBase): MatBase;

    /**
     * Abstract method for multiplying two matrices.
     * @param m The matrix to be multiplied.
     * @returns The result of the multiplication as a new matrix.
     */
    abstract multiply(m: MatBase): MatBase;

    /**
     * Abstract method for multiplying the matrix by a scalar value.
     * @param scalar The scalar value to multiply by.
     * @returns The result of the multiplication as a new matrix.
     */
    abstract scalarMultiply(scalar: number): MatBase;

    /**
     * Abstract method for dividing the matrix by a scalar value.
     * @param scalar The scalar value to divide by.
     * @returns The result of the division as a new matrix.
     */
    abstract scalarDivide(scalar: number): MatBase;
}