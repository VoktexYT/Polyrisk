// Packages
import Phaser from 'phaser';

// Files
import {getImagePropertyByKeySrc} from "../../utils/get-image-properties";


export default class LoadScene extends Phaser.Scene {
	constructor() {
		super({ key: 'LoadScene' });
	}

	preload() {
		console.log(
			getImagePropertyByKeySrc("3d-tiles")
		);
		// constant.LOAD_SPRITESHEET_TILES.forEach(val => {
		// 	try {
		// 		this.load.spritesheet(val.key, val.src, val.config);
		// 	} catch (error) {
		// 		console.error(`Failed to load spritesheet with key: ${val.key}`, error);
		// 	}
		// });
	}

	create() {
		this.scene.start('MainScene');
	}
}

