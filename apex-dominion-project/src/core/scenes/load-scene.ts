import Phaser from 'phaser';

import * as constant from '@/constants/const'

export default class LoadScene extends Phaser.Scene {
	constructor() {
		super({ key: 'LoadScene' });
	}

	preload() {
		constant.LOAD_SPRITESHEET_TILES.forEach(val => {
			try {
				this.load.spritesheet(val.key, val.src, val.config);
			} catch (error) {
				console.error(`Failed to load spritesheet with key: ${val.key}`, error);
			}
		});
	}

	create() {
		this.scene.start('MainScene');
	}
}

