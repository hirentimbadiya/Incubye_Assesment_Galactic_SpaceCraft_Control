const readline = require("readline");
const GalacticSpaceCraftControl = require("./galacticSpaceCraftControl.js");

const DIRECTIONS = ['N', 'E', 'S', 'W', 'U', 'D'];

//! readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//* user will enter the initial direction
rl.question(
    "Please specify the initial direction which can be N, S, E, W, U, D: ",
    (initialDirection) => {
        //* user will enter the commands
        rl.question(
            "Please enter the commands in an order of working (e.g., f,b,l,r,u,d): ",
            (input) => {
                //* Split the commands by comma and trim the spaces
                const commands = input.split(",").map((command) => command.trim());

                //* Initialize the spacecraft
                const spaceCraft = new GalacticSpaceCraftControl(0, 0, 0, initialDirection);

                //* Execute the commands
                commands.forEach((command) => spaceCraft.executeCommands(command));

                //* Print the final position and direction of the spacecraft
                console.log(
                    `Final Position: (${spaceCraft.position[0]}, ${spaceCraft.position[1]}, ${spaceCraft.position[2]})`
                );
                console.log(`Final Direction: ${DIRECTIONS[spaceCraft.directionIndex]}`);

                //!imp: Close the readline interface
                rl.close();
            }
        );
    }
);