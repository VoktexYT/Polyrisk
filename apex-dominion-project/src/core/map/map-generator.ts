/*
*
* This file is used to generate a 2D map with simplex-noise package.
* #First step in map creation
*
* */

// package
import {createNoise2D, NoiseFunction2D} from "simplex-noise";
import seedrandom from "seedrandom";

// project
import { size2D, SEED } from '@/constants/const';

/*
* This function is used to generate procedural 2D map
* */
export function generateNoiseMap(
    widthHeight: size2D,
    offsetX: number = 0,
    offsetY: number = 0
): Array<Array<number>> {
    // Generate seed
    const rgn: seedrandom.PRNG = seedrandom(SEED);
    const noise2D: NoiseFunction2D = createNoise2D(rgn);
    const scale: number = 0.1;

    const map: Array<Array<number>> = [];

    // Generate the map
    for (let y: number = offsetY; y < widthHeight.height + offsetY; y++) {
        const row: Array<number> = [];

        for (let x = offsetX; x < widthHeight.width + offsetX; x++) {
            const value = noise2D(x * scale, y * scale);
            row.push(value);
        }
        map.push(row);
    }

    return map;
}



