import Phaser from "phaser";
import * as constant from "./Const";



export default class HexagonTile {
    public sprite: Phaser.GameObjects.Sprite | undefined;
    public width = 154;
    public height = 156;
    public readonly scale = 0.4;

    constructor(
        private readonly scene: Phaser.Scene) {
            this.width *= this.scale;
            this.height *= this.scale;
        }

    public drawTile(position: constant.position2D, idx: number) {
        this.sprite = this.scene.add.sprite(
            position.x, position.y, constant.LOAD_KEY_SPRITESHEET_3D_TILE, idx
        );

        this.sprite.setScale(this.scale);
        this.sprite.setInteractive();

        // this.createEvent();
    }

    private hoverEvent() {
        if (this.sprite) {

            this.sprite.on('pointerover', () => {
                if (!this.sprite) {return;}
                this.sprite.setTint(0xFFFF00);
            });

            this.sprite.on('pointerout', () => {
                if (!this.sprite) {return;}
                this.sprite.clearTint();
            });
        }
    }

    private clickEvent() {
        if (this.sprite) {
            this.sprite.on('pointerdown', () => {
                if (!this.sprite) {return;}

                this.sprite.setPosition(this.sprite.x, this.sprite.y - 20);
            });
        }
    }

    private createEvent() {
        this.hoverEvent();
        this.clickEvent();
    }
}

