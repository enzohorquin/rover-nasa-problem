const Planet = require('./src/Planet');
const Rover = require('./src/Rover');
const RoverHandler = require('./src/RoverHandler');
const { DIRECTIONS } = require('./src/utils');
const Coordinate = require('./src/Coordinate');


/* Example of how to use.
Set Up Planet Dimension and obstacles. */
const planet = new Planet(4, 4);

planet.setObstacle(0, 0);
planet.setObstacle(0, 1);
planet.setObstacle(0, 2);
planet.setObstacle(0, 3);
planet.setObstacle(2, 0);
planet.setObstacle(2, 1);
planet.setObstacle(2, 2);


//Rover Initial Configuration.
const initialCoordinate = new Coordinate(1, 0);
const initialDirection = DIRECTIONS.SOUTH;
const rover = new Rover(initialCoordinate, initialDirection);

//Rover Handler 

const roverHandler = new RoverHandler(rover, planet);

const command = 'FFFLFLFF';

console.log('Executing Command FFFLFLFF');
console.log('Rover current position: ', rover.getCoordinate());
console.log('Rover Current Direction:', rover.getDirection());

const result = roverHandler.receiveCommands(command);
console.log(result);
console.log(`Rover`, rover.getCoordinate());
