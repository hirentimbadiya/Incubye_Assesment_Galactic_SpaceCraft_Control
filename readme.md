# Chandrayaan 3 Lunar Craft: Galactic Space Craft Control
This project implements a program that simulates the control of a spacecraft navigating through the galaxy based on user-defined commands. The program adheres to the principles of Test-Driven Development (TDD) and uses the Jest testing framework for ensuring accurate functionality. The program is written in Node.js/Javascript.

## Problem Statement
As a scientist at ISRO controlling the latest lunar spacecraft Chandrayaan 3, your task is to develop a program that translates commands sent from Earth into instructions understood by the spacecraft. The spacecraft navigates through the galaxy using galactic coordinates, represented by x, y, z coordinates.

## Features
The program provides the following functionalities:

- Move the spacecraft forward/backward (f, b).
- Turn the spacecraft left/right (l, r).
- Turn the spacecraft up/down (u, d).

## Code Structure
- `galacticSpaceCraftControl.js`: Contains the implementation of the GalacticSpaceCraftControl class with methods for moving and rotating the spacecraft.
- `galacticSpaceCraftControl.test.js`: Contains Jest test cases for each function in the `GalacticSpaceCraftControl` class.
- `index.js`: Handles user input and interaction to control the spacecraft's movements and outputs its final position and direction.


## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- [Node.js](https://nodejs.org/) and NPM (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hirentimbadiya/Incubyte_Assesment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Incubyte_Assesment
   ```

3. Install the required packages:
   ```bash
   npm install
   ```

## How to use
1. Run the program:
   ```bash
   node index.js
   ```

2. Enter the initial Direction and Commands.

3. The program will output the final position of the craft.


## Running the tests

To ensure the reliability of the navigation system, unit tests are provided. To run these tests:

```bash
npm test
```

## Built With

- [Jest](https://jestjs.io/) - Testing Framework
- [Node.js/Javascript](https://nodejs.org/) - The runtime used

## License
This project is licensed under the MIT License.

## Authors

- [Hiren Timbadiya](https://github.com/hirentimbadiya)
