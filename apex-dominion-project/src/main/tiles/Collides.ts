import Phaser from "phaser";

import HexagonTile from "../HexagonsTile";


export default class HexagonCollideTile extends HexagonTile 
{
    constructor(protected readonly scene: Phaser.Scene) 
    {
        super(scene, "3d-tiles", "collide-tile");
    }

    protected callbackOnClickEvent(): void {
        console.log("Collide onclick")
    }
}
