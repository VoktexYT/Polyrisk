import Phaser from 'phaser';

import * as constant from '@/main/Const'

export default class BootScene extends Phaser.Scene {
	constructor() {
		super({ key: 'BootScene' });
	}

	preload() {
		this.load.spritesheet(constant.LOAD_KEY_SPRITESHEET_3D_TILE, constant.LOAD_SRC_SPRITESHEET_3D_TILE, constant.LOAD_CONFIG_SPRITESHEET_3D_TILE);
		this.load.spritesheet(constant.LOAD_KEY_SPRITESHEET_BORDER_TILE, constant.LOAD_SRC_SPRITESHEET_BORDER_TILE, constant.LOAD_CONFIG_SPRITESHEET_BORDER_TILE);
	}

	create() {
		this.scene.start('MainScene');
	}
}

