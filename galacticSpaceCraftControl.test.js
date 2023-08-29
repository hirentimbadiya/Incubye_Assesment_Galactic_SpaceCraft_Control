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

// unit tests for spacecraft movements in NORTH direction
describe("spaceCraft movements in North direction", () => {
    test("moves spaceCraft forward when direction is North", () => {
        const spaceCraft = initializeAndExecute(0, 0, 0, "N", "f");
        checkspaceCraftState(spaceCraft, 0, 1, 0, "N");
    });

    test("moves spaceCraft backward when direction is North", () => {
        const spaceCraft = initializeAndExecute(0, 0, 0, "N", "b");
        checkspaceCraftState(spaceCraft, 0, -1, 0, "N");
    });

    test("turns spaceCraft left from North direction", () => {
        const spaceCraft = initializeAndExecute(0, 0, 0, "N", "l");
        checkspaceCraftState(spaceCraft, 0, 0, 0, "W");
    });

    test("turns spaceCraft right from North direction", () => {
        const spaceCraft = initializeAndExecute(0, 0, 0, "N", "r");
        checkspaceCraftState(spaceCraft, 0, 0, 0, "E");
    });

    test("turns spaceCraft up from North direction", () => {
        const spaceCraft = initializeAndExecute(0, 0, 0, "N", "u");
        checkspaceCraftState(spaceCraft, 0, 0, 0, "U");
    });

    test("turns spaceCraft down from North direction", () => {
        const spaceCraft = initializeAndExecute(0, 0, 0, "N", "d");
        checkspaceCraftState(spaceCraft, 0, 0, 0, "D");
    });
});

// unit tests for spacecraft movements in EAST direction

describe("Spacecraft Movements in East Direction", () => {
    test("moving spacecraft one unit to the East", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "E", "f");
        checkspaceCraftState(spacecraft, 1, 0, 0, "E");
    });

    test("moving spacecraft backwards to the WEST", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "E", "b");
        checkspaceCraftState(spacecraft, -1, 0, 0, "E");
    });

    test("turns spacecraft left from East direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "E", "l");
        checkspaceCraftState(spacecraft, 0, 0, 0, "N");
    });

    test("turns spacecraft right from East direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "E", "r");
        checkspaceCraftState(spacecraft, 0, 0, 0, "S");
    });

    test("moves spacecraft up from East direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "E", "u");
        checkspaceCraftState(spacecraft, 0, 0, 0, "U");
    });

    test("moves spacecraft down from East direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "E", "d");
        checkspaceCraftState(spacecraft, 0, 0, 0, "D");
    });
})