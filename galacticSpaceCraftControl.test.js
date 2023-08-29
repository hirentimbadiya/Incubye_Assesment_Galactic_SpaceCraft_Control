const GalacticSpaceCraftControl = require('./galacticSpaceCraftControl');

const DIRECTIONS = ['N', 'E', 'S', 'W', 'U', 'D'];

// function to initialize and execute the commands
function initializeAndExecute(x, y, z, direction, command) {
    const spaceCraft = new GalacticSpaceCraftControl(x, y, z, direction);
    spaceCraft.executeCommands(command);
    return spaceCraft;
}

// function to check the spaceCraft state and direction
function checkspaceCraftState(spaceCraft, x, y, z, direction) {
    expect(spaceCraft.position[0]).toBe(x);
    expect(spaceCraft.position[1]).toBe(y);
    expect(spaceCraft.position[2]).toBe(z);

    expect(DIRECTIONS[spaceCraft.directionIndex]).toBe(direction);
}