import Phaser from 'phaser';

import HexagonMap from '@/main/HexagonMap';
import CameraDragController from '@/main/CameraDragController';


export default class MainScene extends Phaser.Scene {
    private hexagonMap = new HexagonMap(this);
    private cameraDragController = new CameraDragController(this);
    private fpsText: Phaser.GameObjects.Text | undefined;

    constructor() {
        super({ key: 'MainScene' });
    }

    /**
     * Phaser's `create` lifecycle method. Initializes the scene.
     */
    public create(): void {
        // this.cameraDragController.setupMouseEvents();
        this.hexagonMap.drawMap();

        this.cameras.main.centerOn(400, 200);

        console.log("Create()");
        this.input.keyboard?.on('keydown-D', () => {
            this.hexagonMap.increaseMapSize({x: 1, y: 0});
        });

        this.fpsText = this.add.text(10, 10, '', { font: '30px Arial', color: '#ffffff' });
        this.fpsText.setScrollFactor(0);
    }

    /**
     * Phaser's `update` lifecycle method. Updates camera movement and stores the last mouse position.
     */
    public update(): void {
        // this.cameraDragController.updateCameraMovement();
        this.tweens.update();
        this.fpsText?.setText('FPS: ' + Math.floor(this.game.loop.actualFps));
    }
}
