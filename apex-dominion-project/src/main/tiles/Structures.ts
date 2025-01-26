import Phaser from "phaser";

import HexagonTile from "../HexagonsTile";


export default class HexagonStructureTile extends HexagonTile 
{
    constructor(protected readonly scene: Phaser.Scene) 
    {
        super(scene, "3d-tiles", "structure-tile");
    }

    protected callbackOnClickEvent(): void {
        console.log("Structure onclick");
    }
}
