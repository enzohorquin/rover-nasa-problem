const Planet = require('../Planet');
const Rover = require('../Rover');
const RoverHandler = require('../RoverHandler');
const { DIRECTIONS, COMMANDS } = require('../utils');
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

    const command = 'FFFLF';

    const result = roverHandler.receiveCommands(command);
    expect(result).toEqual('Rover is now in Destination.');
    expect(rover.getCoordinate()).toEqual({ x: 2, y: 3 });

});

test('Test For Rover Handler 2', () => {

    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    const command = 'FFFLFL';

    const result = roverHandler.receiveCommands(command);
    expect(result).toEqual('Rover could not get to Destination');
    expect(rover.getCoordinate()).toEqual({ x: 1, y: 3 });

});
test('Test For Rover Handler 3', () => {

    const initialCoordinate = new Coordinate(0, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    const command = 'FFFLFB';

    const result = roverHandler.receiveCommands(command);
    expect(result).toEqual('Rover could not get to Destination');
    expect(rover.getCoordinate()).toEqual({ x: 1, y: 3 });

});

test('TEst for Rover Handler 4', () => {
    const planet = new Planet(4, 4);

    planet.setObstacle(0, 0);
    planet.setObstacle(0, 1);
    planet.setObstacle(0, 2);
    planet.setObstacle(0, 3);
    planet.setObstacle(2, 0);
    planet.setObstacle(2, 1);
    planet.setObstacle(2, 2);

    const initialCoordinate = new Coordinate(1, 0);
    const initialDirection = DIRECTIONS.SOUTH;
    const rover = new Rover(initialCoordinate, initialDirection);

    const roverHandler = new RoverHandler(rover, planet);

    const command = 'FFFLFLFF';

    const result = roverHandler.receiveCommands(command);
    expect(result).toEqual('Rover is now in Destination.');
    expect(rover.getCoordinate()).toEqual({ x: 3, y: 0 });
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