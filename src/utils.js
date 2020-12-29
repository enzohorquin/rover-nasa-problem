const COMMANDS = {
    FORWARD: 'F',
    LEFT: 'L',
    RIGHT: 'R',
};

const DIRECTIONS = {
    NORTH: 'N',
    EAST: 'E',
    WEST: 'W',
    SOUTH: 'S'
}
function getNextDirection(currentDir, currentCom) {
    switch (currentCom) {
        case COMMANDS.LEFT: {
            switch (currentDir) {
                case DIRECTIONS.EAST: {
                    return DIRECTIONS.NORTH;
                }
                case DIRECTIONS.WEST: {
                    return DIRECTIONS.SOUTH;
                }
                case DIRECTIONS.NORTH: {
                    return DIRECTIONS.WEST;
                }
                case DIRECTIONS.SOUTH: {
                    return DIRECTIONS.EAST;
                }
                default: {
                    return DIRECTIONS.NORTH;
                }
            }
        }
        case COMMANDS.RIGHT: {
            switch (currentDir) {
                case DIRECTIONS.EAST: {
                    return DIRECTIONS.SOUTH;
                }
                case DIRECTIONS.WEST: {
                    return DIRECTIONS.NORTH;
                }
                case DIRECTIONS.NORTH: {
                    return DIRECTIONS.EAST;
                }
                case DIRECTIONS.SOUTH: {
                    return DIRECTIONS.WEST;
                }
                default: {
                    return DIRECTIONS.NORTH;
                }
            }
        }
        default: return currentDir;
    }
}
module.exports = {
    getNextDirection,
    COMMANDS,
    DIRECTIONS
}