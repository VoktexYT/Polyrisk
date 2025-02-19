import Phaser from "phaser";

import { TileSrcJson, TileSrcProperties } from "../../data/types";
import loadTileJson from "../../data/tile-src.json"

export default class LoadScene extends Phaser.Scene {
    tileSrcJson: TileSrcJson = loadTileJson;
    loadingTime: number = new Date().getTime();
    timeclock: number = 0;
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
        });

        this.load.audio("backgroundMusic", "assets/bgMusic.mp3");
    }

    create(): void {
        this.loadingText = this.add.text(100, 100, "", {fontSize: 45});

        setTimeout(() => {
            const seed = prompt("Mettre le seed du jeu: ")
            this.scene.start("sandbox-game", {"seed": seed});
        }, this.timeclock)
    }

    update(): void {
        if (this.loadingText) {
            let timeSpend = (new Date().getTime() - this.loadingTime) / this.timeclock;
            this.loadingText.text = "Loading " + (Math.floor(timeSpend * 100)).toString() + "%";
        }
    }
}