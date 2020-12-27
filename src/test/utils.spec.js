const { getNextDirection, DIRECTIONS, COMMANDS } = require('../utils');

test('Test for getNextDirection for Left Command', () => {
    expect(getNextDirection(DIRECTIONS.SOUTH, COMMANDS.LEFT)).toEqual(DIRECTIONS.EAST);
    expect(getNextDirection(DIRECTIONS.NORTH, COMMANDS.LEFT)).toEqual(DIRECTIONS.WEST);
    expect(getNextDirection(DIRECTIONS.WEST, COMMANDS.LEFT)).toEqual(DIRECTIONS.SOUTH);
    expect(getNextDirection(DIRECTIONS.EAST, COMMANDS.LEFT)).toEqual(DIRECTIONS.NORTH);

});

test('Test for getNextDirection for Right Command', () => {
    expect(getNextDirection(DIRECTIONS.SOUTH, COMMANDS.RIGHT)).toEqual(DIRECTIONS.WEST);
    expect(getNextDirection(DIRECTIONS.NORTH, COMMANDS.RIGHT)).toEqual(DIRECTIONS.EAST);
    expect(getNextDirection(DIRECTIONS.WEST, COMMANDS.RIGHT)).toEqual(DIRECTIONS.NORTH);
    expect(getNextDirection(DIRECTIONS.EAST, COMMANDS.RIGHT)).toEqual(DIRECTIONS.SOUTH);

});

test('Test for wrong Directions and Commands', () => {
    expect(getNextDirection('SO', COMMANDS.RIGHT)).toEqual(DIRECTIONS.NORTH);
    expect(getNextDirection('SO', COMMANDS.LEFT)).toEqual(DIRECTIONS.NORTH);
    expect(getNextDirection(DIRECTIONS.EAST, 'B')).toEqual(DIRECTIONS.EAST);
})