/*
*
* This file is used to create TileMap with Noise2D map
* #fifth step in map creation
*
* */

import Phaser from 'phaser';

import { generateNoiseMap } from './map-generator';
import Tile from "../tiles/tile";

import tileDataJson from '../data/tile-data.json';
import {TileDataProperties} from "../data/types";
import {TileFactory} from "./tile-factory";
import TileCategory from "../tiles/categories/tile-category";


export default class TileMap {
    //private readonly width: number = 25;
    //private readonly height: number = 20;

    private readonly width: number = 50;
    private readonly height: number = 50;

    private map: Array<Array<number>> | undefined;
    public all_hex_map: Array<Array<any>> = [];

    constructor(private readonly scene: Phaser.Scene) {}

    private generateMap(seed: string) {
        this.map = generateNoiseMap(seed, {
            width: this.width,
            height: this.height
        });
    }

    private getTileProperties(noiseValue: number): TileDataProperties {
        let tileDataProperties: TileDataProperties = tileDataJson["tiles"][0];

        // Find the tile type with noise value. Ex: 0.015 to 0.020 = Water tile
        tileDataJson["tiles"].some((tileData) => {
            let minNoise = tileData.noiseRange[0];
            let maxNoise = tileData.noiseRange[1];
            tileDataProperties = tileData;
            return noiseValue >= minNoise && noiseValue < maxNoise;
        });

        return tileDataProperties;
    }

    private initTile(tileCategory: TileCategory, x: number, y: number): void {
        tileCategory.getTile.draw({x: y % 2 == 1 ? x + 0.5 : x, y: y});
        tileCategory.event();
    }

    //
    public drawMap(seed: string): void {
        this.generateMap(seed);
        if (!this.map) return;

        let isOffset = false;

        for (let y: number=0; y<this.height; y++) {
            let rowHex: Array<any> = [];

            for (let x: number=0; x<this.width; x++) {
                let tileDataProperties: TileDataProperties =
                        this.getTileProperties(this.map[y][x]);

                let newTile: TileCategory | null = new TileFactory(
                    new Tile(this.scene, tileDataProperties)
                ).factory();

                if (newTile) this.initTile(newTile, x, y);
            }

            this.all_hex_map.push(rowHex);

            isOffset = !isOffset;
        }
    }
}