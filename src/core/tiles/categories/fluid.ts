import TileCategory from "@/core/tiles/categories/tile-category";
import Tile from "@/core/tiles/tile";

export default class Fluid extends TileCategory {
    constructor(public readonly tile: Tile) {
        super(tile.property);
    }
    event(callback: () => {}) {
    }

}