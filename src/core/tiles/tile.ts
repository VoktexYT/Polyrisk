// packages
import Phaser from "phaser";

// files
import { position2D } from "../../constants/const";
import {TileDataProperties} from "../data/types";

/*
* Class tile
* This class is used to create generic tile. All tile objects are create from this class
* */
export default class Tile {
    private image: Phaser.GameObjects.Image | undefined;
    private width = 154;
    private height = 156;
    private readonly scale = 0.5;

    public constructor(
        private readonly scene: Phaser.Scene,
        public readonly property: TileDataProperties,
    ) {
        this.width *= this.scale;
        this.height *= this.scale;
    }

    public draw(position: position2D, idx: number): void {
        this.image = this.scene.add.image(
            position.x, position.y, this.property.src.key, idx
        );

        this.image.setScale(this.scale);
        this.image.setInteractive();
    }

    public hoverEvent(): void {
        if (this.image) {
            this.image.on('pointerover', () => {
                if (!this.image) {return;}
                this.image.setTint(0xAAAAAA);
            });

            this.image.on('pointerout', () => {
                if (!this.image) {return;}
                this.image.clearTint();
            });
        }
    }

    public clickEvent(callback: () => {}): void {
        if (this.image) {
            this.image.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
                if (!this.image) return;

                if (pointer.leftButtonDown()) {
                    callback();
                }
            });
        }
    }

    /*
    * This function is used to move the tile image on Y axis
    * */
    public moveY(newY: number): void {
        if (this.image) {
            this.image.y += newY;
        }
    }
}

