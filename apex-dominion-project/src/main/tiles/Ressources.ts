import Phaser from "phaser";

import HexagonTile from "../HexagonsTile";


export default class HexagonRessourceTile extends HexagonTile 
{
    public TileIdx: number[] = [
        
    ];

    constructor(protected readonly scene: Phaser.Scene) 
    {
        super(scene);
    }

    protected callbackOnClickEvent(): void {
        console.log("Ressource onclick")
    }
}
