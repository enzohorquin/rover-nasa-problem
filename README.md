
#  Challenge: Mars Rover Mission

## Your Task
You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface
of the planet. Develop a software that translates the commands sent from earth to instructions
that are understood by the rover.
Requirements

● You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W)
it is facing.
● The rover receives a collection of commands. (E.g.) FFRRFFFRL
● The rover can move forward (f).
● The rover can move left/right (l,r).
● Suppose we are on a really weird planet that is square. 200x200 for example :)
● Implement obstacle detection before each move to a new square. If a given
sequence of commands encounters an obstacle, the rover moves up to the last
possible point, aborts the sequence and reports the obstacle.

Take into account

● Rovers are expensive, make sure the software works as expected.

---------------------------------------------------------------------------------------------------

Before run any test you must install dependencies:
```bash
yarn install - npm install 
```

How to run test: 
```bash
yarn install - npm install 
yarn test - npm test
yarn test:coverage - npm test:coverage
```

How to use it (Needs to be Nodejs installed):
```bash
yarn start - npm start 
```
----------------------------------------------------------------------------------------------------

How to run specific scenarios for the Rover Nasa Problem:
```javascript
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
```
Once the file is configured. 
```bash
node filename.js
```