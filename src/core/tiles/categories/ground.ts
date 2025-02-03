import TileCategory from "./tile-category";
import Tile from "../tile";

export default class Ground  extends TileCategory {
    constructor(public readonly tile: Tile) {
        super(tile.property);
    }
    event(callback: () => {}) {
    }
}