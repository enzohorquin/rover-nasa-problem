class Planet {
    #planet;
    #col;
    #row;
    constructor(col, row) {
        this.#planet = Array(col).fill(false).map(() => Array(row).fill(false));
        this.#col = col;
        this.#row = row;
    }

    getCol() {
        return this.#col;
    }
    getRow() {
        return this.#row;
    }
    existsObstacle(x, y) {
        return this.#planet[y][x];
    }

    setObstacle(x, y) {
        this.#planet[y][x] = true;
    }
}

module.exports = Planet;