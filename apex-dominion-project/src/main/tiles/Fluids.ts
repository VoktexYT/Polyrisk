import Phaser from "phaser";

import HexagonTile from "../HexagonsTile";


export default class HexagonFluidTile extends HexagonTile 
{
    constructor(protected readonly scene: Phaser.Scene) 
    {
        super(scene);
    }

    protected callbackOnClickEvent(): void {
        console.log("Fluid onclick")
    }
}
