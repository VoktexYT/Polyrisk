import TileMap from "../../map/tile-map";
import CameraDragController from "../../utils/camera-drag-controller.ts";


export default class MainScene extends Phaser.Scene {
    private tileMap: TileMap = new TileMap(this);
    private dragCamera: CameraDragController = new CameraDragController(this);
    private mapSeed: string = "1";

    constructor() {
        super("sandbox-game");
    }

    init(data: any) {
        this.mapSeed = data.seed;
    }

    buildMap() {
        this.tileMap.drawMap(this.mapSeed);
    }

    camerasEffect() {
        setTimeout(() => {
            this.tweens.add({
                targets: this.cameras.main,
                alpha: 1,
                duration: 300,
                onComplete: () => {
                    this.cameras.main.zoomTo(0.8, 1000,
                        Phaser.Math.Easing.Bounce.Out, true);
                }
            })
        }, 300)

    }

    create() {
        this.sound.add("backgroundMusic", {
            volume: 1,
        }).setLoop(true).setRate(2).play();

        this.cameras.main.setBackgroundColor(0x02376d);

        this.add.image(200, 200, "3d-tiles", 0);

        this.cameras.main.zoom = 0.01;
        this.cameras.main.alpha = 0;
        this.cameras.main.centerOn(1000, 500);

        this.camerasEffect();

        this.dragCamera.setupMouseEvents();

        this.buildMap();
    }

    update() {
        this.dragCamera.updateCameraMovement();
        this.tweens.update();
    }
}