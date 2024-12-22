import Phaser from "phaser";
import * as constant from "./Const";



export default abstract class HexagonTile {
    public image: Phaser.GameObjects.Image | undefined;
    public width = 154;
    public height = 156;
    public readonly scale = 0.5;

    protected properties: {position: constant.position2D, idx: number, noise: number} = {
        position: {x: 0, y: 0},
        idx: 0,
        noise: 0
    };

    constructor(protected readonly scene: Phaser.Scene) {
        this.width *= this.scale;
        this.height *= this.scale;
    }

    public draw(position: constant.position2D, idx: number) {
        this.image = this.scene.add.image(
            position.x, position.y, constant.LOAD_KEY_SPRITESHEET_3D_TILE, idx
        );

        this.image.setScale(this.scale);
        this.image.setInteractive();

        this.createEvent();
    }

    protected hoverEvent() {
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

    public setProperties(idx: number, position: constant.position2D, noise: number) {
        this.properties = {
            position: position,
            idx: idx,
            noise: noise
        };
    }

    public get getProperties() {
        return this.properties;
    }

    protected abstract callbackOnClickEvent(): void;
    public readonly abstract TileIdx: Array<number>;
    public readonly abstract SpritesheetKey: string;

    protected clickEvent() {
        if (this.image) {
            this.image.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
                if (!this.image) {return;}

                if (pointer.leftButtonDown()) {
                    this.callbackOnClickEvent();
                }
            });
        }
    }

    public moveY(newY: number) {
        if (this.image) {
            this.image.y += newY;
        }
    }

    protected createEvent() {
        this.hoverEvent();
        this.clickEvent();
    }
}

