const DIRECTIONS = ['N', 'E', 'S', 'W', 'U', 'D'];

class GalacticSpaceCraftControl {
    constructor(x, y, z, direction) {
        this.position = [0, 0, 0];
        this.position[0] = x;
        this.position[1] = y;
        this.position[2] = z;

        this.directionIndex = DIRECTIONS.indexOf(direction);
    }
}