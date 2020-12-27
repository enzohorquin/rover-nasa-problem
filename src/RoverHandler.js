const { getNextDirection, DIRECTIONS, COMMANDS } = require('./utils');


class RoverHandler {
    #rover;
    #planet;

    constructor(rover, planet) {
        this.#rover = rover;
        this.#planet = planet;
    }

    receiveCommands(commands) {
        let i;
        for (i = 0; i < commands.length; i++) {
            if (!this.parseCommand(commands[i]))
                break;
        }
        return i === commands.length ? "Rover is now in Destination." : "Rover could not get to Destination";

    }

    isValidMovement(currentDirection, x, y, maxCol, maxRow) {
        switch (currentDirection) {
            case DIRECTIONS.NORTH: {
                return y >= 1 && !this.#planet.existsObstacle(x, y - 1);
            }
            case DIRECTIONS.SOUTH: {
                return y < maxRow - 1 && !this.#planet.existsObstacle(x, y + 1);
            }
            case DIRECTIONS.WEST: {
                return x >= 1 && !this.#planet.existsObstacle(x - 1, y);
            }
            case DIRECTIONS.EAST: {
                return x < maxCol - 1 && !this.#planet.existsObstacle(x + 1, y);
            }
            default: {
                return false;
            }
        }
    }

    getNextDirection(currentDir, currentCom) {
        return getNextDirection(currentDir, currentCom);
    }
    parseCommand(command) {
        const maxCol = this.#planet.getCol();
        const maxRow = this.#planet.getRow();
        const currentDirection = this.#rover.getDirection();
        const { x, y } = this.#rover.getCoordinate();
        let isNotValidMovement = false;

        switch (command) {
            case COMMANDS.FORWARD: {
                if (this.isValidMovement(currentDirection, x, y, maxCol, maxRow)) {
                    this.#rover.executeCommand(command);
                    return true;
                } else isNotValidMovement = true;
                break;
            }
            case COMMANDS.LEFT: {
                const nextDirection = this.getNextDirection(currentDirection, command);
                if (this.isValidMovement(nextDirection, x, y, maxCol, maxRow)) {
                    this.#rover.executeCommand(command);
                    return true;
                } else isNotValidMovement = true;
                break;
            }
            case COMMANDS.RIGHT: {
                const nextDirection = this.getNextDirection(currentDirection, command);
                if (this.isValidMovement(nextDirection, x, y, maxCol, maxRow)) {
                    this.#rover.executeCommand(command);
                    return true;
                } else isNotValidMovement = true;
                break;
            }
            default: {
                console.log('Invalid Command.');
                isNotValidMovement = true;
                break;
            }
        }
        if (isNotValidMovement) {
            console.log(`It's not possible to execute this command. Aborting Sequence`);
            this.#rover.movePreviousPosition();
            return false;
        }
    }
}

module.exports = RoverHandler;
