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

        this.cameras.main.zoom = 0.001;
        this.cameras.main.centerOn(400, 200);
        this.cameras.main.zoomTo(1.5, 1000, "Expo", true, (camera, progress, x, y) => {
            if (progress == 1)
            {
                this.hexagonMap.floatTiles();
            }
        });
        this.cameras.main.shake(800, 0.01, true);

        this.hexagonMap.drawMap();
    }

    /**
     * Phaser's `update` lifecycle method. Updates camera movement and stores the last mouse position.
     */
    public update(): void {
        // this.cameraDragController.updateCameraMovement();
        // this.tweens.update();
    }
}
