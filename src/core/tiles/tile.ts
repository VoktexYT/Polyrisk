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
    private readonly scale = 0.5;

    public constructor(
        private readonly scene: Phaser.Scene,
        public readonly property: TileDataProperties,
    ) {}

    public draw(position: position2D): void {
        this.image = this.scene.add.image(
            0, 0, this.property.src.key, this.property.src.index
        );

        this.image.setPosition(
            position.x * this.image.width * this.scale * 0.99,
            position.y * this.image.height * this.scale * 0.61 - this.property.offsetY * 8,
        );

        this.image.setScale(this.scale);
        this.image.setInteractive();
        this.hoverEvent();
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

