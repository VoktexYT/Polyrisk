import Phaser from 'phaser';

import * as constant from '@/main/Const'
import HexagonTile from './HexagonsTile';

import { generateNoiseMap } from './ProceduralMap';


export default class HexagonMap {
    private readonly width: number = 10;
    private readonly height: number = 10;

    private map: Array<Array<number>> = generateNoiseMap(this.width, this.height);

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
            console.log("HEY!")
            this.map = generateNoiseMap(this.width, this.height, 1);
            this.drawMap();
        }
    }

    drawMap(): void {   
        const OFFSET_X = 0;
        const OFFSET_Y = -30;
        
        let isOffset = false;

        const hexagonTileGroup = this.scene.add.group();

        for (let y=0; y<this.height; y++) {
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

                if (noiseValue < 0.000001) {
                    hexagonTile.drawTile(position, 0);                
                }

                else if (noiseValue < 0.1) {
                    hexagonTile.drawTile(position, 1);                
                }

                else if (noiseValue < 0.2) {
                    hexagonTile.drawTile(position, 2);
                }

                else if (noiseValue < 0.3) {
                    hexagonTile.drawTile(position, 3);   
                    hexagonTile.moveY(-10);            
                }

                else if (noiseValue < 0.4) {
                    hexagonTile.drawTile(position, 4);  
                    hexagonTile.moveY(-10);           
                }

                else if (noiseValue < 0.5) {
                    hexagonTile.drawTile(position, 5);
                    hexagonTile.moveY(-15);
                }

                else if (noiseValue < 0.6) {
                    hexagonTile.drawTile(position, 6);
                    hexagonTile.moveY(-19);
                }

                else if (noiseValue < 0.7) {
                    hexagonTile.drawTile(position, 7);
                    hexagonTile.moveY(-19);
                }

                else if (noiseValue < 0.8) {
                    hexagonTile.drawTile(position, 8);
                    hexagonTile.moveY(-19);
                }

                else if (noiseValue < 0.9) {
                    hexagonTile.drawTile(position, 9);
                    hexagonTile.moveY(-19);
                }

                else {
                    hexagonTile.drawTile(position, 10);     
                    hexagonTile.moveY(-19);      
                }

                if (hexagonTile.image) {
                    hexagonTileGroup.add(hexagonTile.image);
                }
            }

            isOffset = !isOffset;
        }
    }
}