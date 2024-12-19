import Phaser from 'phaser';

import * as constant from '@/main/Const'
import HexagonTile from './HexagonsTile';

import { generateNoiseMap } from './ProceduralMap';


export default class HexagonMap {
    private readonly width: number = 30;
    private readonly height: number = 30;

    private map: Array<Array<number>> = generateNoiseMap(this.width, this.height);

    private defaultPosition: constant.position2D = {
        x: 500,
        y: 500
    };

    constructor(private readonly scene: Phaser.Scene) {
    }

    set setDefaultPosition(position: constant.position2D) {
        this.defaultPosition = position;
    }

    get getMapSize(): constant.size2D {
        return {
            width: this.width,
            height: this.height
        };
    }

    get getMapArray(): Array<Array<number>> {
        return this.map;
    }

    drawMap(): void {
        let isRowOffset = true;

        const OFFSET_X = 0;
        const OFFSET_Y = -30;
        
        let isOffset = false;

        const hexagonTileGroup = this.scene.add.group();

        for (let y=0; y<this.height; y++)
        {
            for (let x=0; x<this.width; x++)
            {
                const hexagonTile: HexagonTile = new HexagonTile(this.scene);

                let position: constant.position2D = {x:500, y:500};

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

                if (noiseValue < 0.03) {
                    hexagonTile.drawTile(position, 1);                
                }

                else if (noiseValue < 0.1) {
                    hexagonTile.drawTile(position, 2);
                }

                else if (noiseValue < 0.3) {
                    hexagonTile.drawTile(position, 3);                
                }

                else if (noiseValue < 0.4) {
                    hexagonTile.drawTile(position, 4);                
                }

                else if (noiseValue < 0.5) {
                    hexagonTile.drawTile(position, 5);
                }

                else if (noiseValue < 0.6) {
                    hexagonTile.drawTile(position, 6);
                }

                else if (noiseValue < 0.7) {
                    hexagonTile.drawTile(position, 7);
                }

                else if (noiseValue < 0.8) {
                    hexagonTile.drawTile(position, 8);
                }

                else if (noiseValue < 0.9) {
                    hexagonTile.drawTile(position, 9);
                }

                else {
                    hexagonTile.drawTile(position, 10);                
                }

                if (hexagonTile.sprite) {
                    hexagonTileGroup.add(hexagonTile.sprite);
                }
            }

            isOffset = !isOffset;
        }
    }
}