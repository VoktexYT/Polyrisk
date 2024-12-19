import Phaser from 'phaser';

import * as constant from '@/main/Const'
import HexagonTile from './HexagonsTile';


export default class HexagonMap {
    private readonly width: number = 10;
    private readonly height: number = 10;

    private map: Array<Array<number>> = [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
        [2, 2, 2, 1, 1, 2, 2, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 2, 1, 1, 1],
        [1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
        [1, 1, 3, 3, 3, 3, 3, 1, 1, 1],
        [1, 3, 3, 3, 3, 3, 3, 1, 1, 1],
        [1, 3, 3, 3, 3, 3, 1, 1, 1, 1],
        [1, 1, 3, 3, 1, 1, 1, 1, 1, 1],
    ];

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

                hexagonTile.drawTile(position, this.map[y][x]);

                if (hexagonTile.sprite) {
                    hexagonTileGroup.add(hexagonTile.sprite);
                }
            }

            isOffset = !isOffset;
        }
    }
}