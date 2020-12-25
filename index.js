const Planet = require('./src/Planet');
const Rover = require('./src/Rover');
const { RoverHandler, DIRECTIONS } = require('./src/RoverHandler');
const Coordinate = require('./src/Coordinate');


/* Example of how to use.
Set Up Planet Dimension and obstacles. */
const planet = new Planet(4, 4);
planet.setObstacle(1, 0);
planet.setObstacle(1, 1);
planet.setObstacle(1, 2);
planet.setObstacle(2, 2);
planet.setObstacle(3, 2);

//Rover Initial Configuration.
const initialCoordinate = new Coordinate(0, 0);
const initialDirection = DIRECTIONS.SOUTH;
const rover = new Rover(initialCoordinate, initialDirection);

//Rover Handler 

const roverHandler = new RoverHandler(rover, planet);

const command = 'FFFRF';

const result = roverHandler.receiveCommands(command);
console.log(result);
console.log(`Rover`, rover.getCoordinate());
