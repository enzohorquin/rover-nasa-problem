const Rover = require('../Rover');
const Coordinate = require('../Coordinate');
const { DIRECTIONS, COMMANDS } = require('../RoverHandler');
const { expect } = require('@jest/globals');

const initialCoordinate = new Coordinate(0, 0);
const rover = new Rover(initialCoordinate, DIRECTIONS.SOUTH);

test('Test for Initial Coordinate, Initial Direction and Initial Log', () => {
    expect(rover.getDirection()).toEqual(DIRECTIONS.SOUTH);
    expect(rover.getCoordinate()).toEqual({ x: 0, y: 0 });
    expect(rover.getLogs()).toEqual([{ x: 0, y: 0 }]);
});

test('Test for Updating Direction and Coordinate', () => {
    rover.setDirection(DIRECTIONS.EAST);

    expect(rover.getDirection()).toEqual(DIRECTIONS.EAST);

    const coordinate = new Coordinate(0, 1);
    rover.setCoordinate(coordinate);

    expect(rover.getCoordinate()).toEqual({ x: 0, y: 1 });
});

test('Test for Moving Forward with a North Direction', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.NORTH);

    newRover.moveForward();

    expect(newRover.getCoordinate()).toEqual({ x: 2, y: 1 });
});

test('Test for Moving Forward with a East Direction', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.EAST);

    newRover.moveForward();

    expect(newRover.getCoordinate()).toEqual({ x: 3, y: 2 });
});

test('Test for Moving Forward with a West Direction', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.WEST);

    newRover.moveForward();

    expect(newRover.getCoordinate()).toEqual({ x: 1, y: 2 });
});

test('Test for Moving Forward with a South Direction', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.SOUTH);

    newRover.moveForward();

    expect(newRover.getCoordinate()).toEqual({ x: 2, y: 3 });
});

test('Test for Moving Forward with a Wrong Direction', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, 'SE');

    newRover.moveForward();

    expect(newRover.getCoordinate()).toEqual({ x: 2, y: 2 });
});

test('Test for execute F command', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.SOUTH);

    newRover.executeCommand(COMMANDS.FORWARD);

    expect(newRover.getCoordinate()).toEqual({ x: 2, y: 3 });
    expect(newRover.getLogs()).toEqual([{ x: 2, y: 2 }, { x: 2, y: 3 }]);
});

test('Test for execute L command', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.SOUTH);

    newRover.executeCommand(COMMANDS.LEFT);

    expect(newRover.getCoordinate()).toEqual({ x: 1, y: 2 });
    expect(newRover.getLogs()).toEqual([{ x: 2, y: 2 }, { x: 1, y: 2 }]);
    expect(newRover.getDirection()).toEqual(DIRECTIONS.WEST);
});

test('Test for execute R command', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.SOUTH);
    newRover.executeCommand(COMMANDS.RIGHT);
    expect(newRover.getCoordinate()).toEqual({ x: 3, y: 2 });
    expect(newRover.getLogs()).toEqual([{ x: 2, y: 2 }, { x: 3, y: 2 }]);
    expect(newRover.getDirection()).toEqual(DIRECTIONS.EAST);
});

test('Test for execute Invalid command', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.SOUTH);
    newRover.executeCommand('B');
    expect(newRover.getCoordinate()).toEqual({ x: 2, y: 2 });
    expect(newRover.getLogs()).toEqual([{ x: 2, y: 2 }]);
    expect(newRover.getDirection()).toEqual(DIRECTIONS.SOUTH);
});

test('Test for adding coordinate to the log', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.SOUTH);
    newRover.addCoordinate(new Coordinate(3, 2));
    expect(newRover.getLogs()).toEqual([{ x: 2, y: 2 }, { x: 3, y: 2 }]);
});

test('Test for Moving to the Previous Position', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.SOUTH);

    newRover.executeCommand(COMMANDS.FORWARD);
    newRover.movePreviousPosition();

    expect(newRover.getCoordinate()).toEqual({ x: 2, y: 2 });
    expect(newRover.getLogs()).toEqual([{ x: 2, y: 2 }, undefined]);
});

test('Test for Moving to the Previous Position with only one log available', () => {
    const coordinate = new Coordinate(2, 2);
    const newRover = new Rover(coordinate, DIRECTIONS.SOUTH);


    newRover.movePreviousPosition();

    expect(newRover.getCoordinate()).toEqual({ x: 2, y: 2 });
    expect(newRover.getLogs()).toEqual([{ x: 2, y: 2 }]);
});