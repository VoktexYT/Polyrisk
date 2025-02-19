import TileCategory from "./tile-category";
import Tile from "../tile";

export default class Collide extends TileCategory {
    constructor(public readonly tile: Tile) {
        super(tile);
    }
    event() {
    }

    get getOffsetY(): number {
        return 0;
    }
}