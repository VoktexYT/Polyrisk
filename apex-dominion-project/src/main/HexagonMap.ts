import Phaser from 'phaser';

import * as constant from '@/main/Const'
import HexagonTile from './HexagonsTile';

import { generateNoiseMap } from './ProceduralMap';


export default class HexagonMap {
    private readonly width: number = 10;
    private readonly height: number = 10;

    private map: Array<Array<number>> = generateNoiseMap(this.width, this.height);
    public all_hex_map: Array<Array<HexagonTile>> = [];

    constructor(private readonly scene: Phaser.Scene) {}

    get getMapSize(): constant.size2D {
        return {
            width: this.width,
            height: this.height
        };
    }

    get getMapArray(): Array<Array<number>> {
        return this.map;
    }

    increaseMapSize(dirr: constant.position2D): void {
        if (dirr.x > 0) {
            this.map = generateNoiseMap(this.width, this.height, 1);
            this.drawMap();
        }
    }

    floatTiles(): void {
        for (let row of this.all_hex_map)
        {
            for (let hexTile of row)
            {
                switch(hexTile.getProperties.idx)
                {
                    case constant.PERCENT_NOISE_TILE['light-sand'][0]:
                        this.scene.tweens.add({
                            targets: hexTile.image,
                            duration: 1000,
                            
                        });
                        break;
                }
            }
        }
    }

    drawMap(): void {   
        const OFFSET_X = 0;
        const OFFSET_Y = -30;
        
        let isOffset = false;

        for (let y=0; y<this.height; y++) {
            let rowHex: Array<HexagonTile> = [];

            for (let x=0; x<this.width; x++) {
                const hexagonTile: HexagonTile = new HexagonTile(this.scene);

                let position: constant.position2D = {x:0, y:0};

                if (isOffset)
                {
                    position.x += (hexagonTile.width / 2 + (hexagonTile.width + OFFSET_X) * x);
                }
                else
                {
                    position.x += (hexagonTile.width + OFFSET_X) * x - OFFSET_X / 2;
                }

                position.y += ((hexagonTile.height + OFFSET_Y) * y);

                const noiseValue = this.map[y][x];

                for (let key of Object.keys(constant.PERCENT_NOISE_TILE) as Array<keyof typeof constant.PERCENT_NOISE_TILE>)
                {
                    let [idx, noise] = constant.PERCENT_NOISE_TILE[key];

                    if (noiseValue < noise)
                    {
                        hexagonTile.drawTile(position, idx);
                        hexagonTile.setProperties(idx, position, noise);
                        rowHex.push(hexagonTile);
                        break;
                    }
                }
            }

            this.all_hex_map.push(rowHex);

            isOffset = !isOffset;
        }
    }
}