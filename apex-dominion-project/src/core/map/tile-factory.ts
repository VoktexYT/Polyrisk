/*
*
* This file is used to generate tile object with his category (Ex: Tile() with Ground() category)
* #Fourth step in map creation
*
* */
import Tile from "@/core/tiles/tile";

class TileFactory {
    constructor(private tileProperties: object) {

    }

    public factory(): void {
        console.log("TileFactory");
    }
}