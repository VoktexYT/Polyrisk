import Tile from "../tile";

export default abstract class TileCategory {
    constructor(protected tile: Tile) {}

    abstract event(): void;
    abstract get getOffsetY(): number;
    public get getTile(): Tile {
        return this.tile;
    }
}