const Planet = require('../Planet');
const Rover = require('../Rover');
const { RoverHandler, DIRECTIONS, COMMANDS } = require('../RoverHandler');
const Coordinate = require('../Coordinate');

const planet = new Planet(4, 4);
planet.setObstacle(1, 0);
planet.setObstacle(1, 1);
planet.setObstacle(1, 2);
planet.setObstacle(2, 2);
planet.setObstacle(3, 2);

test('Test For Rover Handler 1', () => {

    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    const command = 'FFFRF';

    const result = roverHandler.receiveCommands(command);
    expect(result).toEqual('Rover is now in Destination.');
    expect(rover.getCoordinate()).toEqual({ x: 2, y: 3 });

});

test('Test For Rover Handler 2', () => {

    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    const command = 'FFFRFL';

    const result = roverHandler.receiveCommands(command);
    expect(result).toEqual('Rover could not get to Destination');
    expect(rover.getCoordinate()).toEqual({ x: 1, y: 3 });

});
test('Test For Rover Handler 3', () => {

    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    const command = 'FFFRFB';

    const result = roverHandler.receiveCommands(command);
    expect(result).toEqual('Rover could not get to Destination');
    expect(rover.getCoordinate()).toEqual({ x: 1, y: 3 });

});

test('Test for getNextDirection for Left Command', () => {

    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    expect(roverHandler.getNextDirection(DIRECTIONS.SOUTH, COMMANDS.LEFT)).toEqual(DIRECTIONS.WEST);
    expect(roverHandler.getNextDirection(DIRECTIONS.NORTH, COMMANDS.LEFT)).toEqual(DIRECTIONS.WEST);
    expect(roverHandler.getNextDirection(DIRECTIONS.WEST, COMMANDS.LEFT)).toEqual(DIRECTIONS.NORTH);
    expect(roverHandler.getNextDirection(DIRECTIONS.EAST, COMMANDS.LEFT)).toEqual(DIRECTIONS.SOUTH);
});

test('Test for getNextDirection for Right Command', () => {

    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    expect(roverHandler.getNextDirection(DIRECTIONS.SOUTH, COMMANDS.RIGHT)).toEqual(DIRECTIONS.EAST);
    expect(roverHandler.getNextDirection(DIRECTIONS.NORTH, COMMANDS.RIGHT)).toEqual(DIRECTIONS.EAST);
    expect(roverHandler.getNextDirection(DIRECTIONS.WEST, COMMANDS.RIGHT)).toEqual(DIRECTIONS.SOUTH);
    expect(roverHandler.getNextDirection(DIRECTIONS.EAST, COMMANDS.RIGHT)).toEqual(DIRECTIONS.NORTH);
});

test('Test for Valid Movements south direction', () => {
    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    expect(roverHandler.isValidMovement(initialDirection, 0, 0, planet.getCol(), planet.getRow())).toBeTruthy();

});

test('Test for Valid Movements North direction', () => {
    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.NORTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    expect(roverHandler.isValidMovement(initialDirection, 0, 0, planet.getCol(), planet.getRow())).toBeFalsy();

});

test('Test for Valid Movements West direction', () => {
    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.WEST;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    expect(roverHandler.isValidMovement(initialDirection, 0, 0, planet.getCol(), planet.getRow())).toBeFalsy();

});

test('Test for Valid Movements EAST direction', () => {
    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.EAST;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    expect(roverHandler.isValidMovement(initialDirection, 0, 0, planet.getCol(), planet.getRow())).toBeFalsy();

});