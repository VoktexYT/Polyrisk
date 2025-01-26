import Phaser from "phaser";
import { LOAD_SPRITESHEET_TILES, position2D, SpritesheetConfig, SpritesheetKey } from "./Const";



export default abstract class HexagonTile {
    public image: Phaser.GameObjects.Image | undefined;
    public width = 154;
    public height = 156;
    public readonly scale = 0.5;

    constructor(
        protected readonly scene: Phaser.Scene, 
        protected readonly spritesheetKey: SpritesheetKey,
        protected readonly tileName: string
    ) {
        this.width *= this.scale;
        this.height *= this.scale;
    }

    public draw(position: position2D, idx: number) {
        this.image = this.scene.add.image(
            position.x, position.y, this.spritesheetKey, idx
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

    protected abstract callbackOnClickEvent(): void;

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

    /*
    * This function is used to move the tile image on Y axis
    * */
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

