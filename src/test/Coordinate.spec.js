const Coordinate = require('../Coordinate');

const coordinate = new Coordinate(0, 0);

test('Test for getCordinate()', () => {
    expect(coordinate.getCoordinate()).toEqual({ x: 0, y: 0 });
});

test('Test for getX()', () => {
    expect(coordinate.getX()).toEqual(0);
});

test('Test for getY()', () => {
    expect(coordinate.getY()).toEqual(0);
})

