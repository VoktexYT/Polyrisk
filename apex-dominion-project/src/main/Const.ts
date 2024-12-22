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


type SpritesheetKey = "3d-tiles" | "border-tiles";

type SpritesheetConfig = {
    key: SpritesheetKey,
    src: any,
    config: Phaser.Types.Loader.FileTypes.ImageFrameConfig
}

export const LOAD_SPRITESHEET_TILES: SpritesheetConfig[] = [
    {
        key: "3d-tiles",
        src: require('@/assets/Normal3Dtiles.png'),
        config: {
            frameWidth: 154,
            frameHeight: 156
        }
    },

    {
        key: "border-tiles",
        src: require('@/assets/borderTiles.png'),
        config: {
            frameWidth: 156,
            frameHeight: 126
        }
    }
];

