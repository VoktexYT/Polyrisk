import TileCategory from "./tile-category";
import Tile from "../tile";

export default class Fluid extends TileCategory {
    private waterAnimationSpeedMax: number = 5000;
    private waterAnimationSpeedMin: number = 1000;

    constructor(public readonly tile: Tile) {
        super(tile);
    }
    event() {
        setTimeout(() => {
            this.makeWaterAnimation();
        }, Math.floor(Math.random() * (this.waterAnimationSpeedMax - this.waterAnimationSpeedMin) + this.waterAnimationSpeedMin))
    }

    get getOffsetY(): number {
        return 0;
    }

    makeWaterAnimation(): void {
        // this.tile.scene.tweens.add({
        //     targets: this.tile.image,
        //     duration: 1000,
        //     yoyo: true,
        //     repeat: -1,
        //     y: this.tile.initialPosition.y + 5,
        // });

        this.tile.scene.tweens.add({
            targets: this.tile.image,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            alpha: 0.9,
        });
    }
}