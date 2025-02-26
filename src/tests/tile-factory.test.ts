import { describe, expect, test } from 'vitest';
import { TileFactory } from '../core/map/tile-factory.ts';
import Tile from '../core/tiles/tile.ts';
import Phaser from 'phaser';
import SettingsConfig = Phaser.Types.Scenes.SettingsConfig;
import Collide from "../core/tiles/categories/collide.ts";
import Ground from "../core/tiles/categories/ground.ts";
import Fluid from "../core/tiles/categories/fluid.ts";
import {COLLIDE_CATEGORY, FLUID_CATEGORY, GROUND_CATEGORY} from "../constants/tiles.ts";


function createInstanceOfTile(scene: Phaser.Scene, categoryName: string): Tile {
    // Create a tile configuration
    const tileConfig = {
        noiseRange: [0, 0],
        name: 'deep water',
        src: {
            key: '3d-tiles',
            index: 1,
        },
        category: categoryName,
        offsetY: 0,
    };

    // Create a Tile instance
    return new Tile(scene, tileConfig);
}

const config = {
    type: Phaser.CANVAS, // Force Canvas renderer
    scene: {
        create() {}
    }
};

describe('Test TileFactory.factory() method', () => {
    const fakeScene = new Phaser.Scene(config as SettingsConfig);

    test('Instance of Fluid', () => {
        const factory = new TileFactory(
            createInstanceOfTile(fakeScene, FLUID_CATEGORY)
        ).factory();
        expect(factory).toBeInstanceOf(Fluid);
    });

    test('Instance of Ground', () => {
        const factory = new TileFactory(
            createInstanceOfTile(fakeScene, GROUND_CATEGORY)
        ).factory();
        expect(factory).toBeInstanceOf(Ground);
    });

    test('Instance of Collide', () => {
        const factory = new TileFactory(
            createInstanceOfTile(fakeScene, COLLIDE_CATEGORY)
        ).factory();
        expect(factory).toBeInstanceOf(Collide);
    });
});