/*
*
* This file is used to create TileMap with Noise2D map
* #fifth step in map creation
*
* */

import Phaser from 'phaser';

import { position2D, size2D } from '@/constants/const'

import { generateNoiseMap } from '@/core/map/map-generator';
import Tile from "@/core/tiles/tile";


export default class TileMap {
    private readonly width: number = 10;
    private readonly height: number = 10;

    private map: Array<Array<number>> = generateNoiseMap({
        width: this.width,
        height: this.height
    });

    public all_hex_map: Array<Array<any>> = [];

    constructor(private readonly scene: Phaser.Scene) {}

    public get getMapSize(): size2D {
        return {
            width: this.width,
            height: this.height
        };
    }

    public get getMapArray(): Array<Array<number>> {
        return this.map;
    }

    public increaseMapSize(dirrection: position2D): void {
        if (dirrection.x > 0) {
            this.map = generateNoiseMap({
                width: this.width,
                height: this.height
            }, 1);

            this.drawMap();
        }
    }

    // public floatTiles(): void {
    //     for (let row of this.all_hex_map)
    //     {
    //         for (let hexTile of row)
    //         {
    //             switch(hexTile.getProperties.idx)
    //             {
    //                 case PERCENT_NOISE_TILE['light-sand'][0]:
    //                     this.scene.tweens.add({
    //                         targets: hexTile.image,
    //                         duration: 1000
    //                     });
    //                     break;
    //             }
    //         }
    //     }
    // }

    public drawMap(): void {
        
        const OFFSET_X = 0;
        const OFFSET_Y = -30;
        
        let isOffset = false;

        // const hexagonTile: Tile = new Tile(this.scene);

        let position: position2D = { x: 0, y: 0 };

        // if (isOffset)
            // position.x += (hexagonTile.width / 2 + (hexagonTile.width + OFFSET_X) * x);
        // else
            // position.x += (hexagonTile.width + OFFSET_X) * x - OFFSET_X / 2;

        // position.y += ((hexagonTile.height + OFFSET_Y) * y);

        for (let y: number=0; y<this.height; y++) {
            let rowHex: Array<any> = [];

            for (let x: number=0; x<this.width; x++) {
                const noiseValue: number = this.map[y][x];

                // for (let key of Object.keys(PERCENT_NOISE_TILE) as Array<keyof typeof PERCENT_NOISE_TILE>)
                //     {
                //         let [idx, noise] = PERCENT_NOISE_TILE[key];
                //
                //         if (noiseValue < noise)
                //         {
                //             // hexagonTile.drawTile(position, idx);
                //             // hexagonTile.setProperties(idx, position, noise);
                //             // rowHex.push(hexagonTile);
                //             break;
                //         }
                //     }
            }

            this.all_hex_map.push(rowHex);

            isOffset = !isOffset;
        }
    }
}