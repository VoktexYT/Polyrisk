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
    public image: Phaser.GameObjects.Image | undefined;
    private readonly scale = 0.5;
    private isSelected: boolean = false;

    public initialPosition: position2D = {x: 0, y: 0};

    public constructor(
        public readonly scene: Phaser.Scene,
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

        this.initialPosition = {x: this.image.x, y: this.image.y};


        this.image.setScale(this.scale);
        this.image.setInteractive();
        // this.clickEvent(() => {
        //     if (!this.image) return;
        //     this.isSelected = !this.isSelected;
        //
        //     if (this.isSelected) {
        //         this.image.setTint(0xAAAAAA);
        //
        //         this.scene.tweens.add({
        //             targets: this.image,
        //             duration: 100,
        //             y: this.initialPosition.y - 30,
        //             onComplete: () => {
        //                 if (!this.image) return;
        //                 this.image.y = this.initialPosition.y - 30;
        //
        //                 this.scene.tweens.add({
        //                     targets: this.image,
        //                     duration: 1000,
        //                     y: this.initialPosition.y - 5,
        //                     repeat: -1,
        //                     yoyo: true,
        //                     ease: Phaser.Math.Easing.Bounce.Out
        //                 })
        //             }
        //         });
        //     }
        // });
    }

    public hoverEvent(): void {
        if (!this.image) return;
        this.image.on('pointerover', () => {
            if (!this.image || this.isSelected) {return;}
            this.image.setTint(0xAAAAAA);
            this.scene.input.setDefaultCursor("pointer");

            this.scene.tweens.add({
                targets: this.image,
                duration: 100,
                y: this.initialPosition.y - 10,
                onComplete: () => {
                    if (!this.image) return;

                    this.scene.tweens.add({
                        targets: this.image,
                        duration: 100,
                        y: this.initialPosition.y,
                    })
                }
            })
        });

        this.image.on('pointerout', () => {
            if (!this.image || this.isSelected) {return;}
            this.scene.input.setDefaultCursor("default");
            this.image.clearTint();
        });
    }

    public clickEvent(callback: () => void): void {
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

