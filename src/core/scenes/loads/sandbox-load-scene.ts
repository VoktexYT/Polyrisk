import Phaser from "phaser";

import { TileSrcJson, TileSrcProperties, replaceKeywordSrc } from "../../data/types";
import loadTileJson from "../../data/tile-src.json"

export default class LoadScene extends Phaser.Scene {
    tileSrcJson: TileSrcJson = loadTileJson;
    loadingTime: number = new Date().getTime();
    timeclock: number = 300;
    loadingText: Phaser.GameObjects.Text | undefined;

    constructor() {
        super("load-sandbox");
    }

    preload(): void {
        this.tileSrcJson["sources"].forEach((tileSrc: TileSrcProperties) => {
            this.load.spritesheet(
                tileSrc.key,
                tileSrc.src,
                tileSrc.config
            );
        })
    }

    create(): void {
        this.loadingText = this.add.text(100, 100, "", {fontSize: 45});

        setTimeout(() => {
            this.scene.start("sandbox-game");
        }, this.timeclock)
    }

    update():void {
        if (this.loadingText) {
            let timeSpend = (new Date().getTime() - this.loadingTime) / this.timeclock;
            this.loadingText.text = "Loading " + (Math.floor(timeSpend * 100)).toString() + "%";
        }
    }
}