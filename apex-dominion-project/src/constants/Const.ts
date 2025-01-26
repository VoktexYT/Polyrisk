import Phaser from "phaser";


export type position2D = {x: number, y: number};
export type size2D = {width: number, height: number};

export const enum TileType {
    Fluid = "Fluid",
    Ressource = "Ressource",
    Structure = "Structure",
    Terrain = "Terrain",
    Collide = "Collide"
};

export const SEED: string = "1";
export const MAX_HEX_COLOR = "FFFFFF";

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

export type SpritesheetKey = "3d-tiles" | "border-tiles";

export type SpritesheetConfig = {
    key: SpritesheetKey,
    src: string,
    config: Phaser.Types.Loader.FileTypes.ImageFrameConfig,
    tiles: Array<{name: string, index: undefined | number, type: TileType, frequency: number}>
}

export const LOAD_SPRITESHEET_TILES: SpritesheetConfig[] = [
    {
        key: "3d-tiles",
        src: require('@/assets/3d-tiles.png'),
        config: {
            frameWidth: 154,
            frameHeight: 156
        },
        tiles: [
            {name: "water", index: undefined, type: TileType.Fluid, frequency: 0.1},
            {name: "deep-water", index: undefined, type: TileType.Fluid, frequency: 0.1},

            {name: "light-sand", index: undefined, type: TileType.Terrain, frequency: 0.3},
            {name: "sand", index: undefined, type: TileType.Terrain, frequency: 0.3},
            {name: "dark-sand", index: undefined, type: TileType.Terrain, frequency: 0.2},

            {name: "grass", index: undefined, type: TileType.Terrain, frequency: 0.4},
            {name: "dark-grass", index: undefined, type: TileType.Terrain, frequency: 0.4},

            {name: "light-stone", index: undefined, type: TileType.Terrain, frequency: 0.5},
            {name: "stone", index: undefined, type: TileType.Collide, frequency: 0.5},
            {name: "dark-stone", index: undefined, type: TileType.Collide, frequency: 0.6},

            {name: "snow", index: undefined, type: TileType.Collide, frequency: 0.7},
        ]
    }
];

