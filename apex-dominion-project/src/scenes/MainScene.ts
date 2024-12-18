import Phaser from 'phaser';

import { getHexagonPoints } from '@/main/getHexagonPoints';
import { getRandomHexColor } from '@/main/getRandomHexColor';
import * as constant from '@/main/constant';

export default class MainScene extends Phaser.Scene {
    /** Tracks whether the right mouse button is pressed */
    private isRightClickActive: boolean = false;

    /** Tracks whether the left mouse button is pressed */
    private isLeftClickActive: boolean = false;

    /** Tracks whether the mouse is moving */
    private isMouseMoving: boolean = false;

    /** Indicates whether the camera is currently moving */
    private isCameraMoving: boolean = false;

    /** Stores the current position of the mouse */
    private currentMousePosition: constant.position2D = { x: 0, y: 0 };

    /** Stores the velocity of the camera */
    private cameraVelocity: constant.position2D = { x: 0, y: 0 };

    /** Stores the previous position of the mouse */
    private previousMousePosition: constant.position2D = this.currentMousePosition;

    /** Group containing all hexagons in the map */
    private hexagonMapGroup: Phaser.GameObjects.Group;

    constructor() {
        super({ key: 'MainScene' });
        this.hexagonMapGroup = new Phaser.GameObjects.Group(this);
    }

    /**
     * Creates a hexagonal grid map with random colors.
     */
    private createHexagonalMap(): void {
        const hexagonPoints = getHexagonPoints(constant.HEXAGON_SIZE);
        let isRowOffset = true;

        // for (let y = 0; y < 1000; y += 43) {
        //     const offset = isRowOffset ? 75 : 0;

        //     for (let x = 0; x < 2000; x += 150) {
        //         const hexagon = this.add.polygon(x + offset, y, hexagonPoints, getRandomHexColor(), 1);
        //         hexagon.setStrokeStyle(2, 0x000000);
        //         this.hexagonMapGroup.add(hexagon);
        //     }

        //     isRowOffset = !isRowOffset;
        // }

        for (let i=0; i<11; i++)
        {
            this.add.image(500 + 157 * i, 500, "3d-tiles", i).setScale(1);
        }

        for (let i=0; i<11; i++)
        {
            this.add.image(500 + 157 * i, 500, "3d-tiles", i).setScale(1);
        }
        // this.add.image(654, 500, "3d-tiles", 1).setScale(1);

        // this.add.image(576, 592, "3d-tiles", 2).setScale(1);
        // this.add.image(729, 592, "3d-tiles", 3).setScale(1);

        // this.add.image(652, 687, "3d-tiles", 2).setScale(1);
        // this.add.image(805, 687, "3d-tiles", 3).setScale(1);
        
    }

    /**
     * Initializes mouse input events for interaction.
     */
    private setupMouseEvents(): void {
        this.input.mouse?.disableContextMenu();

        this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            this.isRightClickActive = pointer.rightButtonDown();
            this.isLeftClickActive = pointer.leftButtonDown();
        });

        this.input.on('pointerup', () => {
            this.isRightClickActive = false;
            this.isLeftClickActive = false;
        });

        this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
            this.isMouseMoving = true;
            this.currentMousePosition = { x: pointer.x, y: pointer.y };
        });
    }

    /**
     * Calculates the difference between the current and previous mouse positions.
     * Updates the camera velocity accordingly.
     * @returns The difference in mouse position as a `position2D` object.
     */
    private getMouseMovementDelta(): constant.position2D {
        const deltaX = this.currentMousePosition.x - this.previousMousePosition.x;
        const deltaY = this.currentMousePosition.y - this.previousMousePosition.y;

        this.cameraVelocity.x = deltaX / 2;
        this.cameraVelocity.y = deltaY / 2;

        return { x: deltaX, y: deltaY };
    }

    /**
     * Handles camera movement based on mouse input and velocity.
     */
    private updateCameraMovement(): void {
        this.isCameraMoving = false;

        if (this.isRightClickActive && this.isMouseMoving) {
            this.isCameraMoving = true;
            const movementDelta = this.getMouseMovementDelta();

            this.cameras.main.scrollX -= movementDelta.x;
            this.cameras.main.scrollY -= movementDelta.y;
        }

        if (!this.isCameraMoving) {
            this.cameraVelocity.x *= constant.CAMERAS_SLIDE;
            this.cameraVelocity.y *= constant.CAMERAS_SLIDE;

            if (Math.abs(this.cameraVelocity.x) <= 0.1) this.cameraVelocity.x = 0;
            if (Math.abs(this.cameraVelocity.y) <= 0.1) this.cameraVelocity.y = 0;

            this.cameras.main.scrollX -= this.cameraVelocity.x;
            this.cameras.main.scrollY -= this.cameraVelocity.y;
        }
    }

    /** 
     * Setup default setings to cameras object. 
    */
    private setupCamera(): void {
        // this.cameras.main.setBounds(-500, -500, 4000, 4000, true);
        this.cameras.main.zoomTo(3, 100)
    }

    /**
     * Phaser's `create` lifecycle method. Initializes the scene.
     */
    public create(): void {
        this.setupCamera();
        this.createHexagonalMap();
        this.setupMouseEvents();
    }

    /**
     * Phaser's `update` lifecycle method. Updates camera movement and stores the last mouse position.
     */
    public update(): void {
        this.updateCameraMovement();
        this.previousMousePosition = this.currentMousePosition;
    }
}
