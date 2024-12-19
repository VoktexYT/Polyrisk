import { createNoise2D } from "simplex-noise";
import seedrandom from "seedrandom";
import * as constant from '@/main/Const';


const rgn = seedrandom(constant.SEED);


export function generateNoiseMap(width: number, height: number, offsetX: number = 0, offsetY: number = 0): Array<Array<number>> {
    const noise2D = createNoise2D(rgn);
    const scale = 0.1;
    const map = [];

    // Generate the map
    for (let y = offsetY; y < height + offsetY; y++) {
        const row = [];
        for (let x = offsetX; x < width + offsetX; x++) {
            const value = noise2D(x * scale, y * scale);
            row.push(value);
        }
        map.push(row);
    }

    return map;
}



