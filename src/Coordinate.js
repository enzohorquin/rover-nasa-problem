class Coordinate {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getCoordinate() {
        return { x: this.x, y: this.y }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

module.exports = Coordinate;