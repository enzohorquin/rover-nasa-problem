const Coordinate = require('./Coordinate');
const { COMMANDS, DIRECTIONS, getNextDirection } = require('./utils');

class Rover {
    #logs;
    #coordinate;
    #direction;

    constructor(initialCoordinate, initialDirection) {
        this.#logs = [];
        this.#coordinate = initialCoordinate;
        this.#direction = initialDirection;
        this.#logs.push(initialCoordinate);
    }

    setCoordinate(coordinate) {
        this.#coordinate = coordinate;
    }

    setDirection(direction) {
        this.#direction = direction;
    }

    getCoordinate() {
        return this.#coordinate;
    }

    getDirection() {
        return this.#direction;
    }

    addCoordinate(coordinate) {
        this.#logs.push(coordinate);
    }

    getLogs() {
        return this.#logs;
    }

    movePreviousPosition() {

        if (this.#logs.length > 1) {
            const prevCoordinate = this.#logs[this.#logs.length - 2];
            this.#logs[this.#logs.length - 1] = undefined; //Deleting Coordinate.
            this.setCoordinate(prevCoordinate);
        }

    }

    moveForward() {
        let newCoordinate = null;
        switch (this.#direction) {
            case DIRECTIONS.NORTH: {
                const { x, y } = this.#coordinate.getCoordinate();
                newCoordinate = new Coordinate(x, y - 1);
                break;
            }
            case DIRECTIONS.SOUTH: {
                const { x, y } = this.#coordinate.getCoordinate();
                newCoordinate = new Coordinate(x, y + 1);
                break;
            }
            case DIRECTIONS.WEST: {
                const { x, y } = this.#coordinate.getCoordinate();
                newCoordinate = new Coordinate(x - 1, y);
                break;
            }
            case DIRECTIONS.EAST: {
                const { x, y } = this.#coordinate.getCoordinate();
                newCoordinate = new Coordinate(x + 1, y);
                break;
            }
            default: break;
        }
        if (!Object.is(newCoordinate, null)) {
            this.addCoordinate(newCoordinate); // Add New Coordinate to the Log.
            this.setCoordinate(newCoordinate); // Update current coordinate.
        }

    }

    executeCommand(command) {
        switch (command) {
            case COMMANDS.FORWARD: {
                this.moveForward();
                break;
            }
            case COMMANDS.LEFT: {
                this.setDirection(getNextDirection(this.#direction, command));
                this.moveForward();
                break;
            }
            case COMMANDS.RIGHT: {
                this.setDirection(getNextDirection(this.#direction, command));
                this.moveForward();
                break;
            }
            default: break;
        }
    }
}


module.exports = Rover;
