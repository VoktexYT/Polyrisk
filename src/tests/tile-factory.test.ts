import { describe, expect, test } from 'vitest';
import { TileFactory } from '../core/map/tile-factory.ts';
import Tile from '../core/tiles/tile.ts';
import Phaser from 'phaser';
import SettingsConfig = Phaser.Types.Scenes.SettingsConfig;


const config = {
    type: Phaser.CANVAS, // Force Canvas renderer
    scene: {
        create() {}
    }
};

describe('tile factory', () => {
    // Create a fake Phaser scene
    const fakeScene = new Phaser.Scene(config as SettingsConfig);

    // Create a tile configuration
    const tileConfig = {
        noiseRange: [0, 0],
        name: 'deep water',
        src: {
            key: '3d-tiles',
            index: 1,
        },
        category: 'fluid',
        offsetY: 0,
    };

    // Create a Tile instance
    const tile = new Tile(fakeScene, tileConfig);

    test('Instance of TileFactory', () => {
        // Create a TileFactory instance
        const fluidFactory = new TileFactory(tile);

        // Log the type of fluidFactory for debugging
        console.log('The instance of TileFactory', typeof fluidFactory);

        // Assert that fluidFactory is an instance of TileFactory
        expect(fluidFactory).toBeInstanceOf(TileFactory);
    });
});