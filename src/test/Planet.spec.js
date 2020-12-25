const Planet = require('../Planet');

const planet = new Planet(200, 200);

test('Max Column Number has to be 200', () => {
    expect(planet.getCol()).toBe(200);
});

test('Max Row Number has to be 200', () => {
    expect(planet.getCol()).toBe(200);
});

test('Planet Init Config must not have any obstacle', () => {
    const maxCol = planet.getCol();
    const maxRow = planet.getRow();
    let hasObstacle = false;

    for (let i = 0; i < maxRow; i++)
        for (let j = 0; j < maxCol; j++)
            if (planet.existsObstacle(j, i)) hasObstacle = true;

    expect(hasObstacle).toBeFalsy();
});

test('SetObstacle and existObstacle', () => {
    planet.setObstacle(0, 0);
    expect(planet.existsObstacle(0, 0)).toBeTruthy();
});