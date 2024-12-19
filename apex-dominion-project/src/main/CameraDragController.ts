import * as constant from "@/main/Const"

import Phaser from "phaser";


export default class CameraDragController {
    private isRightClickActive: boolean = false;

    private isMouseMoving: boolean = false;
    private isCameraMoving: boolean = false;

    private currentMousePosition: constant.position2D = { x: 0, y: 0 };
    private previousMousePosition: constant.position2D = this.currentMousePosition;

    private cameraVelocity: constant.position2D = { x: 0, y: 0 };

    private readonly minVelocity = 0.1;
    private readonly slidePower: number = 0.95; // 1 is infinite slide, 0 isn't slide

    constructor (private readonly scene: Phaser.Scene) {}

    /**
     * Initializes mouse input events for interaction.
    */
    public setupMouseEvents(): void {
        this.scene.input.mouse?.disableContextMenu();

        this.scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            this.isRightClickActive = pointer.rightButtonDown();
        });

        this.scene.input.on('pointerup', () => {
            this.isRightClickActive = false;
        });

        this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
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
    public updateCameraMovement(): void {
        this.isCameraMoving = false;

        if (this.isRightClickActive && this.isMouseMoving) {
            this.isCameraMoving = true;
            const movementDelta = this.getMouseMovementDelta();

            this.scene.cameras.main.scrollX -= movementDelta.x;
            this.scene.cameras.main.scrollY -= movementDelta.y;
        }

        if (!this.isCameraMoving) {
            this.cameraVelocity.x *= this.slidePower;
            this.cameraVelocity.y *= this.slidePower;

            if (Math.abs(this.cameraVelocity.x) <= this.minVelocity) this.cameraVelocity.x = 0;
            if (Math.abs(this.cameraVelocity.y) <= this.minVelocity) this.cameraVelocity.y = 0;

            this.scene.cameras.main.scrollX -= this.cameraVelocity.x;
            this.scene.cameras.main.scrollY -= this.cameraVelocity.y;
        }

        this.previousMousePosition = this.currentMousePosition;
    }
}