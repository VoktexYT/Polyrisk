import Phaser from "phaser";

export type position2D = {x: number, y: number};
export type size2D = {width: number, height: number};

export const LOAD_KEY_SPRITESHEET_3D_TILE: string = "3d-tiles";
export const LOAD_SRC_SPRITESHEET_3D_TILE: string = require('@/assets/Normal3Dtiles.png');
export const LOAD_CONFIG_SPRITESHEET_3D_TILE: Phaser.Types.Loader.FileTypes.ImageFrameConfig = {
    frameWidth: 154,
    frameHeight: 156,
};
