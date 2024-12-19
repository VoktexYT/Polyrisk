import { createNoise2D } from "simplex-noise";


export function generateNoiseMap(width: number, height: number): Array<Array<number>> {
    const noise2D = createNoise2D();
    const scale = 0.1;
    const map = [];

    // Generate the map
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            const value = noise2D(x * scale, y * scale);
            row.push(value);
        }
        map.push(row);
    }

    return map;
}



