// packages
import Phaser from "phaser";

// files
import { position2D, SpritesheetKey } from "@/constants/const";

/*
* Class tile
* This class is used to create generic tile. All tile objects are create from this class
* */
export default class Tile {
    public image: Phaser.GameObjects.Image | undefined;
    public width = 154;
    public height = 156;
    public readonly scale = 0.5;

    public constructor(
        protected readonly scene: Phaser.Scene, 
        protected readonly spritesheetKey: SpritesheetKey,
        protected readonly tileName: string
    ) {
        this.width *= this.scale;
        this.height *= this.scale;
    }

    public draw(position: position2D, idx: number): void {
        this.image = this.scene.add.image(
            position.x, position.y, this.spritesheetKey, idx
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

