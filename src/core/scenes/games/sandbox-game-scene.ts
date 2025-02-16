export default class MainScene extends Phaser.Scene {
    constructor() {
        super("sandbox-game");
    }

    create() {
        this.add.image(200, 200, "3d-tiles", 0);

        this.cameras.main.zoom = 0.001;
        this.cameras.main.zoomTo(1, 1000, "Expo", true);
    }
}