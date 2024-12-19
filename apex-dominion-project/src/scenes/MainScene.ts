import Phaser from 'phaser';

import HexagonMap from '@/main/HexagonMap';
import CameraDragController from '@/main/CameraDragController';


export default class MainScene extends Phaser.Scene {
    private hexagonMap = new HexagonMap(this);
    private cameraDragController = new CameraDragController(this);

    constructor() {
        super({ key: 'MainScene' });
    }

    /**
     * Phaser's `create` lifecycle method. Initializes the scene.
     */
    public create(): void {
        this.cameraDragController.setupMouseEvents();
        this.hexagonMap.drawMap();
    }

    /**
     * Phaser's `update` lifecycle method. Updates camera movement and stores the last mouse position.
     */
    public update(): void {
        this.cameraDragController.updateCameraMovement();
    }
}
