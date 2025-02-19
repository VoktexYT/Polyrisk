import TileCategory from "./tile-category";
import Tile from "../tile";

export default class Ground  extends TileCategory {
    constructor(public readonly tile: Tile) {
        super(tile);
    }
    event() {
        this.tile.hoverEvent();
    }

    get getOffsetY(): number {
        return 3;
    }
}