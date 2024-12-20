import Phaser from "phaser";

export type position2D = {x: number, y: number};
export type size2D = {width: number, height: number};


export const SEED: string = "1";

export const PERCENT_NOISE_TILE = {
    "water":      [0, 0.15],
    "deep-water": [1, 0.25],
    "light-sand": [2, 0.35],
    "sand":       [3, 0.4],
    "dark-sand":  [4, 0.45],
    "light-grass":[5, 0.6],
    "dark-grass": [6, 0.75],
    "light-stone":[7, 0.85],
    "dark-stone":[7, 0.85],
    "stone":      [8, 0.95],
    "snow":       [9, 1]
}


export const LOAD_KEY_SPRITESHEET_3D_TILE: string = "3d-tiles";
export const LOAD_SRC_SPRITESHEET_3D_TILE: string = require('@/assets/Normal3Dtiles.png');
export const LOAD_CONFIG_SPRITESHEET_3D_TILE: Phaser.Types.Loader.FileTypes.ImageFrameConfig = {
    frameWidth: 154,
    frameHeight: 156,
};

export const LOAD_KEY_SPRITESHEET_BORDER_TILE: string = "border-tiles";
export const LOAD_SRC_SPRITESHEET_BORDER_TILE: string = require('@/assets/borderTiles.png');
export const LOAD_CONFIG_SPRITESHEET_BORDER_TILE: Phaser.Types.Loader.FileTypes.ImageFrameConfig = {
    frameWidth: 156,
    frameHeight: 126,
};
