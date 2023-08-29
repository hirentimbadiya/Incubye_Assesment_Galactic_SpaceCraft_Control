const DIRECTIONS = ['N', 'E', 'S', 'W', 'U', 'D'];

class GalacticSpaceCraftControl {
    constructor(x, y, z, direction) {
        this.position = [0, 0, 0];
        this.position[0] = x;
        this.position[1] = y;
        this.position[2] = z;

        this.directionIndex = DIRECTIONS.indexOf(direction);
    }

    moveForward() {
        switch (DIRECTIONS[this.directionIndex]) {
            case 'N':
                this.position[1]++;
                break;
            case 'E':
                this.position[0]++;
                break;
            case 'S':
                this.position[1]--;
                break;
            case 'W':
                this.position[0]--;
                break;
            case 'U':
                this.position[2]++;
                break;
            case 'D':
                this.position[2]--;
                break;
            default:
                throw new Error(`Invalid direction`);

        }
    }

    moveBackward() {
        switch (DIRECTIONS[this.directionIndex]) {
            case 'N':
                this.position[1]--;
                break;
            case 'E':
                this.position[0]--;
                break;
            case 'S':
                this.position[1]++;
                break;
            case 'W':
                this.position[0]++;
                break;
            case 'U':
                this.position[2]--;
                break;
            case 'D':
                this.position[2]++;
                break;
        }
    }

    turnLeft() {
        this.directionIndex = (this.directionIndex + 3) % 4;
    }


    turnRight() {
        this.directionIndex = (this.directionIndex + 1) % 4;
    }

    turnUp() {
        this.directionIndex = 4;
    }

    turnDown() {
        this.directionIndex = 5;
    }
    executeCommands(commands) {
        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];
            if (!['f', 'b', 'l', 'r', 'u', 'd'].includes(command)) {
                throw new Error(`Invalid command: ${command}`);
            }
            switch (command) {
                case 'f':
                    this.moveForward();
                    break;
                case 'b':
                    this.moveBackward();
                    break;
                case 'l':
                    this.turnLeft();
                    break;
                case 'r':
                    this.turnRight();
                    break;
                case 'u':
                    this.turnUp();
                    break;
                case 'd':
                    this.turnDown();
                    break;
            }
        }
    }
}

module.exports = GalacticSpaceCraftControl;