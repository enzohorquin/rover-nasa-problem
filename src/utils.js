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
            if (currentDir === DIRECTIONS.EAST) return DIRECTIONS.NORTH;
            else if (currentDir === DIRECTIONS.WEST) return DIRECTIONS.SOUTH;
            else if (currentDir === DIRECTIONS.NORTH) return DIRECTIONS.WEST;
            else if (currentDir === DIRECTIONS.SOUTH) return DIRECTIONS.EAST;
            return DIRECTIONS.NORTH; // In case of wrong Direction
        }
        case COMMANDS.RIGHT: {
            if (currentDir === DIRECTIONS.EAST) return DIRECTIONS.SOUTH;
            else if (currentDir === DIRECTIONS.WEST) return DIRECTIONS.NORTH;
            else if (currentDir === DIRECTIONS.NORTH) return DIRECTIONS.EAST;
            else if (currentDir === DIRECTIONS.SOUTH) return DIRECTIONS.WEST;
            return DIRECTIONS.NORTH; // In case of wrong Direction
        }
        default: return currentDir;
    }
}
module.exports = {
    getNextDirection,
    COMMANDS,
    DIRECTIONS
}