import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
	constructor() {
		super({ key: 'BootScene' });
	}

	preload() {
		this.load.spritesheet('3d-tiles', require('@/assets/Normal3Dtiles.png'), {
			frameWidth: 154,
			frameHeight: 156
		});
	}

	create() {
		this.scene.start('MainScene');
	}
}

