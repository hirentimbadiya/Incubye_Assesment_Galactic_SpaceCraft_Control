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

// Unit Tests to test movements in West direction

describe("Spacecraft movements in West direction", () => {
    test("moves spacecraft forward when direction is W", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "W", "f");
        checkspaceCraftState(spacecraft, -1, 0, 0, "W");
    });

    test("moves spacecraft backward when direction is West", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "W", "b");
        checkspaceCraftState(spacecraft, 1, 0, 0, "W");
    });

    test("turns spacecraft left from West direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "W", "l");
        checkspaceCraftState(spacecraft, 0, 0, 0, "S");
    });

    test("turns spacecraft right from West direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "W", "r");
        checkspaceCraftState(spacecraft, 0, 0, 0, "N");
    });

    test("turns spacecraft up from West direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "W", "u");
        checkspaceCraftState(spacecraft, 0, 0, 0, "U");
    });

    test("turns spacecraft down from West direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "W", "d");
        checkspaceCraftState(spacecraft, 0, 0, 0, "D");
    });
});

// Unit Tests to test movements in South direction
describe("Spacecraft movements in S direction", () => {
    test("moving spacecraft forward when direction is South", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "S", "f");
        checkspaceCraftState(spacecraft, 0, -1, 0, "S");
    });

    test("moving spacecraft backward when direction is South", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "S", "b");
        checkspaceCraftState(spacecraft, 0, 1, 0, "S");
    });

    test("turns spacecraft left from South direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "S", "l");
        checkspaceCraftState(spacecraft, 0, 0, 0, "E");
    });

    test("turns spacecraft right from South direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "S", "r");
        checkspaceCraftState(spacecraft, 0, 0, 0, "W");
    });

    test("turns spacecraft up from South direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "S", "u");
        checkspaceCraftState(spacecraft, 0, 0, 0, "U");
    });

    test("turns spacecraft down from South direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "S", "d");
        checkspaceCraftState(spacecraft, 0, 0, 0, "D");
    });
});

// Unit Tests to test movements in Upwards direction
describe("Spacecraft movements in Upwards direction", () => {
    test("moves spacecraft forward when direction is Up", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "U", "f");
        checkspaceCraftState(spacecraft, 0, 0, 1, "U");
    });

    test("moves spacecraft backward when direction is Up", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "U", "b");
        checkspaceCraftState(spacecraft, 0, 0, -1, "U");
    });

    test("turns spacecraft left from Up direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "U", "l");
        checkspaceCraftState(spacecraft, 0, 0, 0, "N");
    });

    test("turns spacecraft right from Up direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "U", "r");
        checkspaceCraftState(spacecraft, 0, 0, 0, "S");
    });

    test("turns spacecraft up when facing Up direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "U", "u");
        checkspaceCraftState(spacecraft, 0, 0, 0, "U");
    });

    test("turns spacecraft down when facing Up direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "U", "d");
        checkspaceCraftState(spacecraft, 0, 0, 0, "D");
    });
});

// Unit Tests to test movements in Downwards direction
describe("Spacecraft movements in Downwards direction", () => {
    test("moves spacecraft forward when direction is Down", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "D", "f");
        checkspaceCraftState(spacecraft, 0, 0, -1, "D");
    });

    test("moves spacecraft backward when direction is Down", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "D", "b");
        checkspaceCraftState(spacecraft, 0, 0, 1, "D");
    });

    test("turns spacecraft left from Down direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "D", "l");
        checkspaceCraftState(spacecraft, 0, 0, 0, "S");
    });

    test("turns spacecraft right from Down direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "D", "r");
        checkspaceCraftState(spacecraft, 0, 0, 0, "N");
    });

    test("turns spacecraft up when facing Down direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "D", "u");
        checkspaceCraftState(spacecraft, 0, 0, 0, "U");
    });

    test("turns spacecraft down when facing Down direction", () => {
        const spacecraft = initializeAndExecute(0, 0, 0, "D", "d");
        checkspaceCraftState(spacecraft, 0, 0, 0, "D");
    });
});