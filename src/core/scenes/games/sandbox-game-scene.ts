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
        this.cameras.main.zoomTo(1, 1000, "Expo", true);
    }

    create() {
        this.add.image(200, 200, "3d-tiles", 0);
        this.cameras.main.zoom = 0.8;
        this.cameras.main.centerOn(1000, 500);
        this.dragCamera.setupMouseEvents();
        this.buildMap();
    }

    update() {
        this.dragCamera.updateCameraMovement();
    }
}